import {
  Controller,
  Body,
  Post,
  Get,
  Patch,
  UseGuards,
  Request,
  Param,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { AppliesService } from "./applies.service";
import { UpsertApplyRequestDto } from "./dto/upsert-apply.request.dto";
import { UpsertApplyResponseDto } from "./dto/upsert-apply.response.dto";
import { AccessTokenGuard } from "../auth/guard/bearer-token.guard";
import { UpdateStatusDto } from "./dto/update-status.dto";

@ApiTags("지원/초대 관리")
@Controller("applies")
export class AppliesController {
  constructor(private readonly appliesService: AppliesService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: "팀에 지원하기" })
  @ApiResponse({
    status: 201,
    description: "지원 성공",
    type: UpsertApplyResponseDto,
  })
  @ApiResponse({ status: 400, description: "잘못된 요청" })
  @ApiResponse({ status: 401, description: "인증 실패" })
  @UseGuards(AccessTokenGuard)
  @Post("teams/:teamId/apply")
  applyToTeam(
    @Body() applyRequestDto: UpsertApplyRequestDto,
    @Param("teamId") teamId: string,
    @Request() req: any,
  ) {
    return this.appliesService.upsert(
      applyRequestDto,
      req.user_id,
      "APPLY",
      teamId,
    );
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: "사용자를 팀에 초대하기" })
  @ApiResponse({
    status: 201,
    description: "초대 성공",
    type: UpsertApplyResponseDto,
  })
  @ApiResponse({ status: 400, description: "잘못된 요청" })
  @ApiResponse({ status: 401, description: "인증 실패" })
  @UseGuards(AccessTokenGuard)
  @Post("users/:userId/invite")
  inviteUserToTeam(
    @Body() inviteRequestDto: UpsertApplyRequestDto,
    @Param("userId") userId: string,
  ) {
    return this.appliesService.upsert(
      inviteRequestDto,
      userId,
      "INVITE",
      "teamId",
    );
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: "팀소유자가 지원/초대 상태 조회" })
  @ApiResponse({
    status: 200,
    description: "조회 성공",
    type: UpsertApplyResponseDto,
  })
  @UseGuards(AccessTokenGuard)
  @Get("teams/:teamId/history")
  getApplyStatus(@Param("teamId") teamId: string) {
    return this.appliesService.findByUserAndTeamHistoryByTeamId(teamId);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: "지원자가 지원/초대 상태 조회" })
  @ApiResponse({
    status: 200,
    description: "조회 성공",
    type: UpsertApplyResponseDto,
  })
  @UseGuards(AccessTokenGuard)
  @Get("history")
  getApplyStatusByUserId(@Request() req: any) {
    return this.appliesService.findByUserAndTeamHistoryByUserId(req.user_id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: "지원/초대 상태 업데이트" })
  @ApiResponse({
    status: 200,
    description: "업데이트 성공",
    type: UpsertApplyResponseDto,
  })
  @UseGuards(AccessTokenGuard)
  @Patch("status")
  updateApplyStatus(@Body() updateRequestDto: UpdateStatusDto) {
    return this.appliesService.updateStatus(updateRequestDto);
  }
}
