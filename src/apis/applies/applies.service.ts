import { Injectable, Logger } from "@nestjs/common";
import { UpsertApplyRequestDto } from "./dto/upsert-apply.request.dto";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { UpsertApplyResponseDto } from "./dto/upsert-apply.response.dto";
import { plainToInstance } from "class-transformer";
import { action, apply_status } from "@postgres-client";
import { TeamsService } from "@/apis/teams/teams.service";
import { mapApplyToResponseDto } from "./util/apply-mapper";

@Injectable()
export class AppliesService {
  private readonly logger = new Logger(AppliesService.name);

  constructor(
    private readonly postgresService: PostgresService,
    private readonly teamsService: TeamsService,
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
        const teamId = ownersTeam.id;

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

        const teamPositionId = teamPosition.id;

        result = await this.postgresService.apply_history.upsert({
          where: {
            user_id_team_position_id: {
              user_id: userId,
              team_position_id: teamPositionId,
            },
          },
          update: {
            message: upsertApplyDto.message,
            apply_status: upsertApplyDto.applyStatus,
            action: action,
            updated_at: new Date(),
          },
          create: {
            user_id: userId,
            team_position_id: teamPositionId,
            message: upsertApplyDto.message,
            apply_status: upsertApplyDto.applyStatus,
            action: action,
          },
        });
      } else if (action === "APPLY") {
        if (!positionId) {
          throw new Error("Position ID is required");
        }

        const teamId = applyId;
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
        const teamPositionId = teamPosition.id;
        result = await this.postgresService.apply_history.upsert({
          where: {
            user_id_team_position_id: {
              user_id: userId,
              team_position_id: teamPositionId,
            },
          },
          update: {
            message: upsertApplyDto.message,
            apply_status: upsertApplyDto.applyStatus,
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

      return mapApplyToResponseDto(result);
    } catch (error) {
      this.logger.error(`Error in update apply: ${error.message}`, error.stack);
      throw error;
    }
  }
}
