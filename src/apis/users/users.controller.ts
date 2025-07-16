import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  UseGuards,
  HttpStatus,
  HttpCode,
  Patch,
} from "@nestjs/common";
import {
  ApiOkResponse,
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiQuery,
} from "@nestjs/swagger";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";
import { AuthenticatedUser } from "@/apis/auth/types/authenticated-user.interface";
import { User as UserDecorator } from "@/apis/auth/decorators/user.decorator";
import { User } from "./entities/user.entity";
import { mapToUserEntity } from "./utils/user-mapping.util";

// Request DTOs
import { CreateUserReqDto } from "./dto/req/create-user.req.dto";
import { UpdateUserReqDto } from "./dto/req/update-user.req.dto";

// Response DTOs
import { GetUserResDto } from "./dto/res/get.user.res.dto";
import { CreateUserResDto } from "./dto/res/create-user.res.dto";
import { UpdateUserResDto } from "./dto/res/update-user.res.dto";
import {
  GetUsersResDto,
  GetUsersResponseDto,
} from "./dto/res/get.users.res.dto";
import { FileUploadInfo } from "@/infrastructure/storage/files/s3/s3.service";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * 내 정보 조회
   */
  @Get("me")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "내 정보 조회",
    description: "로그인한 사용자의 정보를 조회합니다.",
  })
  @ApiOkResponse({
    description: "내 정보 조회 성공",
    type: GetUserResDto,
  })
  async getMyInfo(
    @UserDecorator() authenticatedUser: AuthenticatedUser,
  ): Promise<GetUserResDto> {
    const userInfo = await this.usersService.findUserByUserId(
      authenticatedUser.id,
    );
    return userInfo;
  }

  /**
   * 특정 사용자 정보 조회
   */
  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "사용자 정보 조회",
    description: "특정 사용자의 정보를 조회합니다.",
  })
  @ApiParam({ name: "id", description: "사용자 ID" })
  @ApiOkResponse({
    description: "사용자 정보 조회 성공",
    type: GetUserResDto,
  })
  async getUserById(@Param("id") id: string): Promise<GetUserResDto> {
    const userInfo = await this.usersService.findUserByUserId(id);
    // 비공개 프로필인 경우 제한된 정보만 반환
    if (!userInfo.isPublic) {
      const limitedUser = new User({
        ...userInfo,
        github_id: undefined,
        address: undefined,
        description: "=========비공개 프로필입니다.=========",
        user_stacks: [],
      } as AuthenticatedUser);
      return new GetUserResDto(limitedUser);
    }

    return userInfo;
  }

  /**
   * 공개 사용자 목록 조회
   */
  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "사용자 목록 조회",
    description: "공개 프로필 사용자 목록을 조회합니다.",
  })
  @ApiQuery({
    name: "page",
    required: false,
    description: "페이지 번호 (기본값: 1)",
  })
  @ApiQuery({
    name: "limit",
    required: false,
    description: "페이지당 항목 수 (기본값: 20)",
  })
  @ApiOkResponse({
    description: "사용자 목록 조회 성공",
    type: GetUsersResponseDto,
  })
  async getUsers(
    @Query("page") page: string = "1",
    @Query("limit") limit: string = "20",
  ): Promise<GetUsersResponseDto> {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const start = (pageNum - 1) * limitNum;
    const end = start + limitNum;

    const users = await this.usersService.findUsers(start, end);
    const usersDto = users.map((user) => new GetUsersResDto(user));

    return new GetUsersResponseDto(usersDto);
  }

  /**
   * 새 사용자 생성 (관리자용)
   */
  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: "사용자 생성",
    description: "새로운 사용자를 생성합니다.",
  })
  @ApiOkResponse({
    description: "사용자 생성 성공",
    type: CreateUserResDto,
  })
  async createUser(
    @Body() createUserDto: CreateUserReqDto,
  ): Promise<CreateUserResDto> {
    const newUser = await this.usersService.createUser(createUserDto);
    const userEntity = mapToUserEntity(newUser);
    return new CreateUserResDto(userEntity);
  }

  /**
   * 프로필 이미지 업로드를 위한 Presigned URL 생성
   */

  @Post("me/presigned-url")
  @ApiOperation({
    summary: "프로필 이미지 업로드를 위한 Presigned URL 생성",
    description: "프로필 이미지 업로드를 위한 Presigned URL을 생성합니다.",
  })
  @ApiOkResponse({
    description: "Presigned URL 생성 성공",
  })
  @UseGuards(JwtAuthGuard)
  async generatePresignedUrl(
    @UserDecorator() authenticatedUser: AuthenticatedUser,
    @Body() dto: { fileName: string },
  ): Promise<FileUploadInfo> {
    return this.usersService.generatePresignedUrl(
      authenticatedUser.id,
      dto.fileName,
    );
  }

  /**
   * 내 정보 수정
   */
  @Patch("me")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "내 정보 수정",
    description: "로그인한 사용자의 정보를 부분적으로 수정합니다.",
  })
  @ApiOkResponse({
    description: "내 정보 수정 성공",
    type: UpdateUserResDto,
  })
  async updateMyInfo(
    @UserDecorator() authenticatedUser: AuthenticatedUser,
    @Body() updateUserDto: UpdateUserReqDto,
  ) {
    const updatedUser = await this.usersService.updateUserInfoByUserId(
      authenticatedUser.id,
      updateUserDto,
    );

    return updatedUser;
  }

  /**
   * 특정 사용자 정보 수정 (관리자용)
   */
  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "사용자 정보 수정",
    description:
      "특정 사용자의 정보를 부분적으로 수정합니다. (관리자 권한 필요)",
  })
  @ApiParam({ name: "id", description: "사용자 ID" })
  @ApiOkResponse({
    description: "사용자 정보 수정 성공",
    type: UpdateUserResDto,
  })
  async updateUserById(
    @Param("id") id: string,
    @Body() updateUserDto: UpdateUserReqDto,
  ) {
    const updatedUser = await this.usersService.updateUserInfoByUserId(
      id,
      updateUserDto,
    );
    return updatedUser;
  }

  /**
   * 내 가입 상태 조회
   */
  @Get("me/join-status")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "내 가입 상태 조회",
    description: "로그인한 사용자의 가입 상태를 조회합니다.",
  })
  @ApiOkResponse({
    description: "가입 상태 조회 성공",
    schema: {
      type: "object",
      properties: {
        isJoined: { type: "boolean" },
      },
    },
  })
  async getMyJoinStatus(
    @UserDecorator() authenticatedUser: AuthenticatedUser,
  ): Promise<{ isJoined: boolean }> {
    const isJoined = await this.usersService.getJoinStatusByUuid(
      authenticatedUser.id,
    );
    return { isJoined };
  }

  /**
   * 내 정보 완성도 확인
   */
  @Get("me/completion")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "내 정보 완성도 확인",
    description: "로그인한 사용자의 정보 완성도를 확인합니다.",
  })
  @ApiOkResponse({
    description: "정보 완성도 확인 성공",
    schema: {
      type: "object",
      properties: {
        isComplete: { type: "boolean" },
        message: { type: "string" },
      },
    },
  })
  async checkMyInfoCompletion(
    @UserDecorator() authenticatedUser: AuthenticatedUser,
  ): Promise<{ isComplete: boolean; message: string }> {
    const isComplete = await this.usersService.checkNullInfo(
      authenticatedUser.id,
    );

    return {
      isComplete,
      message: isComplete
        ? "모든 필수 정보가 입력되었습니다."
        : "일부 필수 정보가 누락되었습니다.",
    };
  }

  /**
   * 내 팀 소유 상태 확인
   */
  @Get("me/team-owner")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "팀 소유 상태 확인",
    description: "로그인한 사용자가 팀을 소유하고 있는지 확인합니다.",
  })
  @ApiOkResponse({
    description: "팀 소유 상태 확인 성공",
    schema: {
      type: "object",
      properties: {
        isOwner: { type: "boolean" },
      },
    },
  })
  async checkMyTeamOwnership(
    @UserDecorator() authenticatedUser: AuthenticatedUser,
  ): Promise<{ isOwner: boolean }> {
    const isOwner = await this.usersService.checkOwner(authenticatedUser.id);
    return { isOwner };
  }

  @Get("me/:teamPositionId")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: "내 팀 포지션 조회",
    description: "로그인한 사용자의 팀 포지션을 조회합니다.",
  })
  @ApiParam({ name: "teamPositionId", description: "팀 포지션 ID" })
  @ApiOkResponse({
    description: "팀 포지션 조회 성공",
  })
  async getMyTeamMembersByTeamPositionId(
    @UserDecorator() authenticatedUser: AuthenticatedUser,
  ) {
    const teamPosition = await this.usersService.getTeamMembers(
      authenticatedUser.id,
    );
    return teamPosition;
  }
}
