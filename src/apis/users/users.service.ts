import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { AuthenticatedUser } from "@/apis/auth/types/authenticated-user.interface";
import { CreateUserReqDto } from "./dto/req/create-user.req.dto";
import { UpdateUserReqDto } from "./dto/req/update-user.req.dto";
import {
  mapCreateDtoToDbFormat,
  mapUpdateDtoToDbFormat,
  mapStackIdsToUserStacks,
} from "./utils/user-mapping.util";

@Injectable()
export class UsersService {
  constructor(private postgresService: PostgresService) {}

  /**
   * 외부 ID로 사용자 조회 (소셜 로그인용)
   */
  async findUserByExternalId(externalId: string) {
    const user = await this.postgresService.user_auths.findFirst({
      where: {
        external_id: externalId,
      },
      include: {
        users: true,
      },
    });

    if (!user) {
      throw new NotFoundException("User not found with external ID");
    }
    return user;
  }

  /**
   * 사용자 ID로 사용자 조회 (완전한 정보 포함)
   */
  async findUserByUserId(userId: string): Promise<AuthenticatedUser> {
    const user = await this.postgresService.users.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        position_id: true,
        nickname: true,
        email: true,
        github_id: true,
        img_url: true,
        address: true,
        join_status: true,
        is_public: true,
        description: true,
        proceed_type: true,
        user_stacks: {
          select: {
            stacks: {
              select: {
                id: true,
                name: true,
                img_url: true,
              },
            },
          },
        },
        create_at: true,
        updated_at: true,
        role: true,
        name: true,
      },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    // Prisma 결과를 AuthenticatedUser 형태로 변환
    const authenticatedUser: AuthenticatedUser = {
      id: user.id,
      position_id: user.position_id,
      nickname: user.nickname,
      email: user.email,
      github_id: user.github_id,
      img_url: user.img_url,
      address: user.address,
      join_status: user.join_status,
      is_public: user.is_public,
      description: user.description,
      proceed_type: user.proceed_type,
      role: user.role,
      name: user.name,
      user_stacks: user.user_stacks?.map((stack) => ({
        stack_id: stack.stacks.id,
      })),
      create_at: user.create_at?.toISOString(),
      updated_at: user.updated_at?.toISOString(),
    };

    return authenticatedUser;
  }

  /**
   * 스택 이름으로 스택 조회
   */
  async findStacks(stackName: string) {
    const stack = await this.postgresService.stacks.findFirst({
      where: {
        name: stackName,
      },
    });
    return stack;
  }

  /**
   * 공개 사용자 목록 조회 (페이지네이션)
   */
  async findUsers(start: number, end: number): Promise<AuthenticatedUser[]> {
    const pageSize = end - start;
    const users = await this.postgresService.users.findMany({
      where: {
        is_public: true,
      },
      skip: start,
      take: pageSize,
      select: {
        id: true,
        position_id: true,
        nickname: true,
        email: true,
        github_id: true,
        img_url: true,
        address: true,
        join_status: true,
        is_public: true,
        description: true,
        proceed_type: true,
        role: true,
        name: true,
        create_at: true,
        updated_at: true,
      },
    });

    return users.map((user) => ({
      id: user.id,
      position_id: user.position_id,
      nickname: user.nickname,
      email: user.email,
      github_id: user.github_id,
      img_url: user.img_url,
      address: user.address,
      join_status: user.join_status,
      is_public: user.is_public,
      description: user.description,
      proceed_type: user.proceed_type,
      role: user.role,
      name: user.name,
      user_stacks: [], // 목록 조회에서는 스택 정보 제외
      create_at: user.create_at?.toISOString(),
      updated_at: user.updated_at?.toISOString(),
    }));
  }

  /**
   * 새 사용자 생성
   */
  async createUser(
    createUserDto: CreateUserReqDto,
  ): Promise<AuthenticatedUser> {
    const userData = mapCreateDtoToDbFormat(createUserDto);
    const { userStacks, ...userDataWithoutStacks } = userData as any;

    const newUser = await this.postgresService.$transaction(async (tx) => {
      // 사용자 생성
      const user = await tx.users.create({
        data: userDataWithoutStacks,
      });

      // 스택 연결 (있는 경우)
      if (userStacks && userStacks.length > 0) {
        await tx.user_stacks.createMany({
          data: mapStackIdsToUserStacks(userStacks, user.id),
        });
      }

      return user;
    });

    // 생성된 사용자 정보 조회하여 반환
    return this.findUserByUserId(newUser.id);
  }

  /**
   * 사용자 정보 수정
   */
  async updateUserInfoByUserId(
    userId: string,
    userInfo: UpdateUserReqDto,
  ): Promise<{ message: string }> {
    // 사용자 존재 확인
    await this.findUserByUserId(userId);

    const { userStacks, ...mappedData } = mapUpdateDtoToDbFormat(userInfo);

    await this.postgresService.$transaction(async (tx) => {
      // 스택 정보 업데이트 (제공된 경우)
      if (userStacks !== undefined) {
        // 기존 스택 삭제
        await tx.user_stacks.deleteMany({
          where: {
            user_id: userId,
          },
        });

        // 새 스택 추가
        if (userStacks.length > 0) {
          await tx.user_stacks.createMany({
            data: mapStackIdsToUserStacks(userStacks, userId),
          });
        }
      }

      // 사용자 정보 업데이트 (스택 제외)
      if (Object.keys(mappedData).length > 0) {
        await tx.users.update({
          where: {
            id: userId,
          },
          data: mappedData,
        });
      }
    });

    return { message: "User information updated successfully" };
  }

  /**
   * 사용자 가입 상태 조회
   */
  async getJoinStatusByUuid(uuid: string): Promise<boolean> {
    const user = await this.postgresService.users.findFirst({
      where: {
        id: uuid,
      },
      select: {
        join_status: true,
      },
    });

    if (!user) {
      throw new InternalServerErrorException(
        "User not found for join status check",
      );
    }

    return Boolean(user.join_status);
  }

  /**
   * 사용자 가입 상태 업데이트
   */
  async updateJoinStatusByUuid(
    uuid: string,
    status: boolean,
    tx?: PostgresService,
  ): Promise<boolean> {
    const client = tx ?? this.postgresService;

    const updateResult = await client.users.update({
      where: {
        id: uuid,
      },
      data: {
        join_status: status,
        updated_at: new Date(),
      },
    });

    if (!updateResult) {
      throw new InternalServerErrorException("Failed to update join status");
    }

    return true;
  }

  /**
   * 사용자 정보 완성도 확인
   */
  async checkNullInfo(uuid: string): Promise<boolean> {
    const userInfo = await this.findUserByUserId(uuid);

    // 필수 필드들이 모두 채워져 있는지 확인
    const requiredFields = [
      "nickname",
      "email",
      "github_id",
      "img_url",
      "address",
      "position_id",
      "description",
    ];

    const isValid = requiredFields.every((field) => {
      const value = userInfo[field as keyof AuthenticatedUser];
      return value !== null && value !== undefined && value !== "";
    });

    // 스택도 하나 이상 있어야 함
    const hasStacks = Boolean(userInfo.user_stacks?.length);

    return isValid && hasStacks;
  }

  /**
   * 팀 소유자 여부 확인
   */
  async checkOwner(uuid: string): Promise<boolean> {
    const team = await this.postgresService.teams.findFirst({
      where: {
        user_id: uuid,
      },
    });

    return !!team;
  }
}
