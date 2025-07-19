import { Injectable, Logger } from "@nestjs/common";
import { UpsertApplyRequestDto } from "./dto/upsert-apply.request.dto";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { UpsertApplyResponseDto } from "./dto/upsert-apply.response.dto";
import { plainToInstance } from "class-transformer";
import { action, apply_status } from "@postgres-client";
import { TeamsService } from "@/apis/teams/teams.service";
import { mapApplyToResponseDto } from "./util/apply-mapper";
// import { NotificationsService } from "@/presentation/websockets/notifications/notifications.service";

@Injectable()
export class AppliesService {
  private readonly logger = new Logger(AppliesService.name);

  constructor(
    private readonly postgresService: PostgresService,
    private readonly teamsService: TeamsService,
    // private readonly notificationsService: NotificationsService,
  ) {}

  async upsert(
    upsertApplyDto: UpsertApplyRequestDto,
    userId: string,
    action: action,
    positionId?: string,
    applyId?: string,
  ) {
    try {
      let result: any;
      let teamId: string;
      let teamPositionId: string;
      if (action === "INVITE") {
        const ownerId = applyId;
        const ownersTeam = await this.postgresService.teams.findFirst({
          where: { user_id: ownerId },
          select: {
            id: true,
          },
        });
        if (!ownersTeam) {
          throw new Error("팀을 생성하신 경우에만 초대가 가능합니다.");
        }
        teamId = ownersTeam.id;

        const teamPosition =
          await this.postgresService.team_positions.findFirst({
            where: {
              team_id: teamId,
              positions: {
                id: positionId,
              },
            },
          });

        if (!teamPosition) {
          throw new Error("Team position not found");
        }

        teamPositionId = teamPosition.id;

        result = await this.postgresService.apply_history.upsert({
          where: {
            user_id_team_position_id: {
              user_id: userId,
              team_position_id: teamPositionId,
            },
          },
          update: {
            message: upsertApplyDto.message,
            apply_status: upsertApplyDto.applyStatus || "SUBMITTED",
            action: action,
            updated_at: new Date(),
          },
          create: {
            user_id: userId,
            team_position_id: teamPositionId,
            message: upsertApplyDto.message,
            apply_status: upsertApplyDto.applyStatus || "SUBMITTED",
            action: action,
          },
        });
      } else if (action === "APPLY") {
        if (!positionId) {
          throw new Error("Position ID is required");
        }

        teamId = applyId as string;
        const teamPosition =
          await this.postgresService.team_positions.findFirst({
            where: {
              positions: {
                id: positionId,
              },
              team_id: teamId,
            },
            select: {
              id: true,
            },
          });

        if (!teamPosition) {
          throw new Error("Team position not found");
        }
        teamPositionId = teamPosition.id;
        result = await this.postgresService.apply_history.upsert({
          where: {
            user_id_team_position_id: {
              user_id: userId,
              team_position_id: teamPositionId,
            },
          },
          update: {
            message: upsertApplyDto.message,
            apply_status: upsertApplyDto.applyStatus || "SUBMITTED",
            action: action,
            updated_at: new Date(),
          },
          create: {
            user_id: userId,
            team_position_id: teamPositionId,
            message: upsertApplyDto.message,
            apply_status: upsertApplyDto.applyStatus || "SUBMITTED",
            action: action,
          },
        });
      } else {
        throw new Error("Invalid action");
      }

      this.logger.log(
        `Successfully upserted apply record with status: ${result.apply_status}`,
      );
      if (!result || !result.user_id || !result.team_position_id) {
        throw new Error("Apply record not found");
      }

      // 알림 전송
      // try {
      //   if (action === "INVITE") {
      //     // 초대받는 유저에게 알림
      //     await this.notificationsService.createAndSendNotification({
      //       userId: userId,
      //       teamId: teamId,
      //       teamPositionId: teamPositionId,
      //       type: "INVITE_SENT",
      //       content: "새로운 팀 초대가 도착했습니다.",
      //     });
      //   } else if (action === "APPLY") {
      //     // 팀장에게 알림
      //     const team = await this.postgresService.teams.findUnique({
      //       where: { id: teamId },
      //       select: { user_id: true },
      //     });
      //     if (team) {
      //       await this.notificationsService.createAndSendNotification({
      //         userId: team.user_id as string,
      //         teamId: teamId,
      //         teamPositionId: teamPositionId,
      //         type: "APPLY_SUBMITTED",
      //         content: "새로운 지원이 도착했습니다.",
      //       });
      //     }
      //   }
      // } catch (notificationError) {
      //   this.logger.error(
      //     `Failed to send notification: ${notificationError.message}`,
      //   );
      //   // 알림 실패는 전체 트랜잭션을 실패시키지 않음
      // }

      return mapApplyToResponseDto(result);
    } catch (error) {
      this.logger.error(`Error in upsert apply: ${error.message}`, error.stack);
      throw error;
    }
  }

  async findByUserAndTeamHistoryByTeamId(teamId: string) {
    try {
      this.logger.log(`Finding apply record for team ${teamId}`);

      const teamPositions = await this.postgresService.team_positions.findMany({
        where: {
          team_id: teamId,
        },
        select: {
          id: true,
        },
      });

      if (teamPositions.length === 0) {
        return [];
      }

      const teamPositionIds = teamPositions.map((tp) => tp.id);
      const result = await this.postgresService.apply_history.findMany({
        where: {
          team_position_id: { in: teamPositionIds },
        },
        select: {
          user_id: true,
          team_position_id: true,
          message: true,
          apply_status: true,
          action: true,
          created_at: true,
          updated_at: true,
          reply: true,
          is_read: true,
        },
        orderBy: [{ action: "asc" }, { created_at: "desc" }],
      });

      if (!result || result.length === 0) {
        return [];
      }

      return plainToInstance(UpsertApplyResponseDto, result.reverse());
    } catch (error) {
      this.logger.error(`Error in find apply: ${error.message}`, error.stack);
      throw error;
    }
  }

  async findByUserAndTeamHistoryByUserId(userId: string) {
    try {
      this.logger.log(`Finding apply record for user ${userId}`);

      const result = await this.postgresService.apply_history.findMany({
        where: {
          user_id: userId,
        },
        orderBy: {
          created_at: "desc",
        },
      });

      if (!result) {
        throw new Error("Apply record not found");
      }

      return plainToInstance(UpsertApplyResponseDto, result.reverse());
    } catch (error) {
      this.logger.error(`Error in find apply: ${error.message}`, error.stack);
      throw error;
    }
  }

  async updateStatus(
    userId: string,
    teamPositionId: string,
    apply_status: apply_status,
    ownerId: string,
  ) {
    try {
      this.logger.log(
        `Updating apply status for user ${userId} and team ${teamPositionId}`,
      );

      let expectedAction: action;
      if (ownerId === userId) {
        expectedAction = "INVITE";
      } else {
        expectedAction = "APPLY";
      }

      const appliedHistory = await this.postgresService.apply_history.findFirst(
        {
          where: {
            user_id: userId,
            team_position_id: teamPositionId,
          },
        },
      );

      if (!appliedHistory) {
        throw new Error("Apply record not found");
      }
      if (appliedHistory.action !== expectedAction) {
        throw new Error("잘못된 접근입니다.");
      }

      let result: any;

      switch (apply_status) {
        case "SUCCESS":
          await this.teamsService.addTeamMember(teamPositionId, userId);
          result = await this.postgresService.apply_history.update({
            where: {
              user_id_team_position_id: {
                user_id: userId,
                team_position_id: teamPositionId,
              },
            },
            data: {
              apply_status: apply_status,
              updated_at: new Date(),
            },
          });
          break;
        case "REJECTED":
          result = await this.postgresService.apply_history.update({
            where: {
              user_id_team_position_id: {
                user_id: userId,
                team_position_id: teamPositionId,
              },
            },
            data: {
              apply_status: apply_status,
              updated_at: new Date(),
            },
          });
          break;
        case "CANCEL":
          if (appliedHistory.apply_status === "SUBMITTED") {
            result = await this.postgresService.apply_history.update({
              where: {
                user_id_team_position_id: {
                  user_id: userId,
                  team_position_id: teamPositionId,
                },
              },
              data: {
                apply_status: apply_status,
                updated_at: new Date(),
              },
            });
          } else {
            return {
              message: "이미 지원/초대가 완료되어 취소할 수 없습니다.",
            };
          }

          break;
        default:
          throw new Error("Invalid apply status");
      }

      if (!result) {
        throw new Error("Apply record not found");
      }

      this.logger.log(
        `Successfully updated apply record with status: ${result.apply_status}`,
      );

      // 상태 변경 알림 전송
      // try {
      //   let notificationType: string;
      //   let notificationContent: string;

      //   switch (apply_status) {
      //     case "SUCCESS":
      //       notificationType =
      //         expectedAction === "INVITE"
      //           ? "INVITE_ACCEPTED"
      //           : "APPLY_ACCEPTED";
      //       notificationContent =
      //         expectedAction === "INVITE"
      //           ? "초대가 수락되었습니다."
      //           : "지원이 수락되었습니다.";
      //       break;
      //     case "REJECTED":
      //       notificationType =
      //         expectedAction === "INVITE"
      //           ? "INVITE_REJECTED"
      //           : "APPLY_REJECTED";
      //       notificationContent =
      //         expectedAction === "INVITE"
      //           ? "초대가 거절되었습니다."
      //           : "지원이 거절되었습니다.";
      //       break;
      //     case "CANCEL":
      //       notificationType =
      //         expectedAction === "INVITE"
      //           ? "INVITE_CANCELED"
      //           : "APPLY_CANCELED";
      //       notificationContent =
      //         expectedAction === "INVITE"
      //           ? "초대가 취소되었습니다."
      //           : "지원이 취소되었습니다.";
      //       break;
      //     default:
      //       return mapApplyToResponseDto(result);
      //   }

      //   // 팀 정보 조회
      //   const teamPosition =
      //     await this.postgresService.team_positions.findUnique({
      //       where: { id: teamPositionId },
      //       select: { team_id: true },
      //     });

      //   if (teamPosition) {
      //     await this.notificationsService.createAndSendNotification({
      //       userId: userId,
      //       teamId: teamPosition.team_id,
      //       teamPositionId: teamPositionId,
      //       type: notificationType as any,
      //       content: notificationContent,
      //     });
      //   }
      // } catch (notificationError) {
      //   this.logger.error(
      //     `Failed to send status change notification: ${notificationError.message}`,
      //   );
      //   // 알림 실패는 전체 트랜잭션을 실패시키지 않음
      // }

      return mapApplyToResponseDto(result);
    } catch (error) {
      this.logger.error(`Error in update apply: ${error.message}`, error.stack);
      throw error;
    }
  }
}
