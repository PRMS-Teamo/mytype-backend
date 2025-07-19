import {
  Controller,
  Body,
  Post,
  Get,
  Patch,
  UseGuards,
  Param,
  UnauthorizedException,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { AppliesService } from "./applies.service";
import { UpsertApplyRequestDto } from "./dto/upsert-apply.request.dto";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { AuthenticatedUser } from "@/apis/auth/types/authenticated-user.interface";
import { UsersService } from "@/apis/users/users.service";
import { USER_INFO_NULL, USER_JOINED } from "@/constants/errorMessage";
import { User } from "../auth/decorators/user.decorator";
import { Pagination } from "../shared/decorator/pagination.decorator";
import { PaginationMeta } from "../shared/decorator/pagination.decorator";

@ApiTags("지원/초대 관리")
@Controller("applies")
export class AppliesController {
  constructor(
    private readonly appliesService: AppliesService,
    private readonly usersService: UsersService,
  ) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: "팀에 지원하기" })
  @ApiResponse({
    status: 201,
    description: "지원 성공",
    schema: {
      type: "object",
      properties: {
        userId: { type: "string" },
        teamPositionId: { type: "string" },
        message: { type: "string" },
        applyStatus: {
          type: "string",
          enum: ["SUBMITTED", "SUCCESS", "REJECTED", "CANCEL"],
        },
        action: { type: "string", enum: ["APPLY", "INVITE"] },
        createdAt: { type: "string", format: "date-time" },
        updatedAt: { type: "string", format: "date-time" },
        reply: { type: "string" },
        isRead: { type: "boolean" },
        teamPosition: {
          type: "object",
          properties: {
            team: {
              type: "object",
              properties: {
                teamId: { type: "string" },
                title: { type: "string" },
                recruitStatus: { type: "string" },
              },
            },
            position: {
              type: "object",
              properties: {
                positionId: { type: "string" },
                positionName: { type: "string" },
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({ status: 400, description: "잘못된 요청" })
  @ApiResponse({ status: 401, description: "인증 실패" })
  @UseGuards(JwtAuthGuard)
  @Post("teams/:teamId/apply/:positionId")
  async applyToTeam(
    @Body() applyRequestDto: UpsertApplyRequestDto,
    @User() user: AuthenticatedUser,
    @Param("teamId") teamId: string,
    @Param("positionId") positionId: string,
  ) {
    const userId = user.id;
    const userJoinStatus = await this.usersService.getJoinStatusByUuid(userId);
    if (userJoinStatus) {
      throw new UnauthorizedException({ USER_JOINED });
    }
    const userInfoStatus = await this.usersService.checkNullInfo(userId);
    if (!userInfoStatus) {
      throw new UnauthorizedException({ USER_INFO_NULL });
    }
    return this.appliesService.upsert(
      applyRequestDto,
      userId,
      "APPLY",
      positionId,
      teamId,
    );
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: "사용자를 팀에 초대하기" })
  @ApiResponse({
    status: 201,
    description: "초대 성공",
    schema: {
      type: "object",
      properties: {
        userId: { type: "string" },
        teamPositionId: { type: "string" },
        message: { type: "string" },
        applyStatus: {
          type: "string",
          enum: ["SUBMITTED", "SUCCESS", "REJECTED", "CANCEL"],
        },
        action: { type: "string", enum: ["APPLY", "INVITE"] },
        createdAt: { type: "string", format: "date-time" },
        updatedAt: { type: "string", format: "date-time" },
        reply: { type: "string" },
        isRead: { type: "boolean" },
        teamPosition: {
          type: "object",
          properties: {
            team: {
              type: "object",
              properties: {
                teamId: { type: "string" },
                title: { type: "string" },
                recruitStatus: { type: "string" },
              },
            },
            position: {
              type: "object",
              properties: {
                positionId: { type: "string" },
                positionName: { type: "string" },
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({ status: 400, description: "잘못된 요청" })
  @ApiResponse({ status: 401, description: "인증 실패" })
  @UseGuards(JwtAuthGuard)
  @Post("users/:userId/invite/:positionId")
  inviteUserToTeam(
    @Body() inviteRequestDto: UpsertApplyRequestDto,
    @User() owner: AuthenticatedUser,
    @Param("userId") userId: string,
    @Param("positionId") positionId: string,
  ) {
    const ownerId = owner.id;
    return this.appliesService.upsert(
      inviteRequestDto,
      userId,
      "INVITE",
      positionId,
      ownerId,
    );
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: "팀소유자가 지원/초대 상태 조회" })
  @ApiResponse({
    status: 200,
    description: "조회 성공",
    schema: {
      type: "array",
      items: {
        type: "object",
        properties: {
          userId: { type: "string" },
          teamPositionId: { type: "string" },
          message: { type: "string" },
          applyStatus: {
            type: "string",
            enum: ["SUBMITTED", "SUCCESS", "REJECTED", "CANCEL"],
          },
          action: { type: "string", enum: ["APPLY", "INVITE"] },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
          reply: { type: "string" },
          isRead: { type: "boolean" },
          teamPosition: {
            type: "object",
            properties: {
              team: {
                type: "object",
                properties: {
                  teamId: { type: "string" },
                  title: { type: "string" },
                  recruitStatus: { type: "string" },
                },
              },
              position: {
                type: "object",
                properties: {
                  positionId: { type: "string" },
                  positionName: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  @Get("teams/:teamId/history")
  getApplyStatus(
    @Param("teamId") teamId: string,
    @Pagination({ optional: true }) pagination: PaginationMeta,
  ) {
    if (pagination.enabled) {
      return this.appliesService.findByUserAndTeamHistoryByTeamId(
        teamId,
        pagination.skip,
        pagination.take,
      );
    } else {
      return this.appliesService.findByUserAndTeamHistoryByTeamId(teamId);
    }
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: "지원자가 지원/초대 상태 조회" })
  @ApiResponse({
    status: 200,
    description: "조회 성공",
    schema: {
      type: "array",
      items: {
        type: "object",
        properties: {
          userId: { type: "string" },
          teamPositionId: { type: "string" },
          message: { type: "string" },
          applyStatus: {
            type: "string",
            enum: ["SUBMITTED", "SUCCESS", "REJECTED", "CANCEL"],
          },
          action: { type: "string", enum: ["APPLY", "INVITE"] },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
          reply: { type: "string" },
          isRead: { type: "boolean" },
          teamPosition: {
            type: "object",
            properties: {
              team: {
                type: "object",
                properties: {
                  teamId: { type: "string" },
                  title: { type: "string" },
                  recruitStatus: { type: "string" },
                },
              },
              position: {
                type: "object",
                properties: {
                  positionId: { type: "string" },
                  positionName: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  @Get("history")
  getApplyStatusByUserId(@User() user: AuthenticatedUser) {
    return this.appliesService.findByUserAndTeamHistoryByUserId(user.id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: "지원/초대 상태 업데이트" })
  @ApiResponse({
    status: 200,
    description: "업데이트 성공",
    schema: {
      type: "object",
      properties: {
        userId: { type: "string" },
        teamPositionId: { type: "string" },
        message: { type: "string" },
        applyStatus: {
          type: "string",
          enum: ["SUBMITTED", "SUCCESS", "REJECTED", "CANCEL"],
        },
        action: { type: "string", enum: ["APPLY", "INVITE"] },
        createdAt: { type: "string", format: "date-time" },
        updatedAt: { type: "string", format: "date-time" },
        reply: { type: "string" },
        isRead: { type: "boolean" },
        teamPosition: {
          type: "object",
          properties: {
            team: {
              type: "object",
              properties: {
                teamId: { type: "string" },
                title: { type: "string" },
                recruitStatus: { type: "string" },
              },
            },
            position: {
              type: "object",
              properties: {
                positionId: { type: "string" },
                positionName: { type: "string" },
              },
            },
          },
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  @Patch(":teamPositionId/:userId")
  updateApplyStatus(
    @Body() updateRequestDto: UpdateStatusDto,
    @Param("teamPositionId") teamPositionId: string,
    @Param("userId") userId: string,
    @User() owner: AuthenticatedUser,
  ) {
    const { apply_status } = updateRequestDto;
    return this.appliesService.updateStatus(
      userId,
      teamPositionId,
      apply_status,
      owner.id,
    );
  }
}
