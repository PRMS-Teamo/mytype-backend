import { Injectable, Logger } from "@nestjs/common";
import { UpsertApplyRequestDto } from "./dto/upsert-apply.request.dto";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { UpsertApplyResponseDto } from "./dto/upsert-apply.response.dto";
import { plainToInstance } from "class-transformer";
import { action } from "@postgres-client";
import { UpdateStatusDto } from "./dto/update-status.dto";

@Injectable()
export class AppliesService {
  private readonly logger = new Logger(AppliesService.name);

  constructor(private readonly prisma: PostgresService) {}

  async upsert(
    upsertApplyDto: UpsertApplyRequestDto,
    userId: string,
    action: action,
    teamId: string,
  ) {
    try {
      this.logger.log(
        `Upserting apply record for user ${userId} and team ${teamId}`,
      );

      if (teamId === "teamId") {
        const team = await this.prisma.teams.findFirst({
          where: {
            user_id: userId,
          },
        });
        if (!team) {
          throw new Error("Team not found");
        }
        teamId = team.id;
      }

      const result = await this.prisma.apply_history.upsert({
        where: {
          user_id_team_id: {
            user_id: userId,
            team_id: teamId,
          },
        },
        update: {
          message: upsertApplyDto.message,
          apply_status: upsertApplyDto.apply_status,
          action: action,
          updated_at: new Date(),
        },
        create: {
          user_id: userId,
          team_id: teamId,
          message: upsertApplyDto.message,
          apply_status: upsertApplyDto.apply_status || "SUBMITTED",
          action: action,
        },
      });

      this.logger.log(
        `Successfully upserted apply record with status: ${result.apply_status}`,
      );
      if (!result || !result.user_id || !result.team_id) {
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

      const result = await this.prisma.apply_history.findMany({
        where: {
          team_id: teamId,
        },
        select: {
          user_id: true,
          team_id: true,
          message: true,
          apply_status: true,
          action: true,
          created_at: true,
          updated_at: true,
          reply: true,
          is_read: true,
        },
        orderBy: {
          action: "asc",
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

  async findByUserAndTeamHistoryByUserId(userId: string) {
    try {
      this.logger.log(`Finding apply record for user ${userId}`);

      const result = await this.prisma.apply_history.findMany({
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

  async updateStatus(updateRequestDto: UpdateStatusDto) {
    const { teamId, userId, apply_status, reply = null } = updateRequestDto;
    try {
      this.logger.log(
        `Updating apply status for user ${userId} and team ${teamId}`,
      );

      const result = await this.prisma.apply_history.update({
        where: {
          user_id_team_id: {
            user_id: userId,
            team_id: teamId,
          },
        },
        data: {
          apply_status: apply_status,
          reply: reply || null,
          updated_at: new Date(),
        },
      });

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
