import { Injectable, Logger } from "@nestjs/common";
import { UpsertApplyRequestDto } from "./dto/upsert-apply.request.dto";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { UpsertApplyResponseDto } from "./dto/upsert-apply.response.dto";
import { plainToInstance } from "class-transformer";
import { action } from "@postgres-client";
import { UpdateStatusDto } from "./dto/update-status.dto";
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
    teamPositionId: string,
  ) {
    try {
      this.logger.log(
        `Upserting apply record for user ${userId} and team ${teamPositionId}`,
      );
      const result = await this.postgresService.apply_history.upsert({
        where: {
          user_id_team_position_id: {
            user_id: userId,
            team_position_id: teamPositionId,
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
          team_position_id: teamPositionId,
          message: upsertApplyDto.message,
          apply_status: upsertApplyDto.apply_status || "SUBMITTED",
          action: action,
        },
      });

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

      const teamPositionIds = teamPositions.map((tp) => tp.id);
      if (teamPositionIds.length === 0) {
        this.logger.warn(`No team position found for team ${teamId}`);
      }

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
        orderBy: {
          action: "asc",
          created_at: "desc",
        },
      });

      if (!result || result.length === 0) {
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

  async updateStatus(userId: string, updateRequestDto: UpdateStatusDto) {
    const {
      teamId,
      targetUserId,
      apply_status,
      reply = null,
    } = updateRequestDto;
    try {
      this.logger.log(
        `Updating apply status for user ${targetUserId} and team ${teamId}`,
      );

      const result = await this.postgresService.apply_history.update({
        where: {
          user_id_team_position_id: {
            user_id: targetUserId,
            team_position_id: teamId,
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

      // TODO : 정상적으로 등록했다면, 이와 같은 과정도 진행해야함.
      if (apply_status === "SUCCESS") {
        // 팀 등록 로직이 진행되어야함.
        await this.teamsService.addTeamMember(teamId, userId);
      }

      return plainToInstance(UpsertApplyResponseDto, result);
    } catch (error) {
      this.logger.error(`Error in update apply: ${error.message}`, error.stack);
      throw error;
    }
  }
}
