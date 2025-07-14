import { Injectable, Logger } from "@nestjs/common";
import { UpsertApplyRequestDto } from "./dto/upsert-apply.request.dto";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { UpsertApplyResponseDto } from "./dto/upsert-apply.response.dto";
import { plainToInstance } from "class-transformer";
import { action, apply_status } from "@postgres-client";
import { TeamsService } from "@/apis/teams/teams.service";

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
    positionId: string,
    ownerId?: string,
  ) {
    try {
      let result: any;
      if (action === "INVITE") {
        const ownersTeam = await this.postgresService.teams.findFirst({
          where: { user_id: ownerId },
        });
        if (!ownersTeam) {
          throw new Error("팀을 생성하신 경우에만 초대가 가능합니다.");
        }
        result = await this.postgresService.apply_history.upsert({
          where: {
            user_id_team_position_id: {
              user_id: userId,
              team_position_id: positionId,
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
            team_position_id: positionId,
            message: upsertApplyDto.message,
            apply_status: upsertApplyDto.applyStatus,
            action: action,
          },
        });
      } else {
        const teamPosition =
          await this.postgresService.team_positions.findUnique({
            where: { id: positionId },
          });
        if (!teamPosition) {
          throw new Error("Team position not found");
        }
        result = await this.postgresService.apply_history.upsert({
          where: {
            user_id_team_position_id: {
              user_id: userId,
              team_position_id: positionId,
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
            team_position_id: positionId,
            message: upsertApplyDto.message,
            apply_status: upsertApplyDto.applyStatus || "SUBMITTED",
            action: action,
          },
        });
      }

      this.logger.log(
        `Successfully upserted apply record with status: ${result.apply_status}`,
      );
      if (!result || !result.user_id || !result.team_position_id) {
        throw new Error("Apply record not found");
      }
      return plainToInstance(UpsertApplyResponseDto, result);
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
  ) {
    try {
      this.logger.log(
        `Updating apply status for user ${userId} and team ${teamPositionId}`,
      );

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
        default:
          throw new Error("Invalid apply status");
      }

      if (!result) {
        throw new Error("Apply record not found");
      }

      this.logger.log(
        `Successfully updated apply record with status: ${result.apply_status}`,
      );

      return plainToInstance(UpsertApplyResponseDto, result);
    } catch (error) {
      this.logger.error(`Error in update apply: ${error.message}`, error.stack);
      throw error;
    }
  }
}
