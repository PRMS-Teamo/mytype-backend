import { Injectable, Logger } from "@nestjs/common";
import { UpsertApplyRequestDto } from "./dto/upsert-apply.request.dto";
import { PostgresService } from "@/prisma/postgres/postgres.service";
import { UpsertApplyResponseDto } from "./dto/upsert-apply.response.dto";
import { plainToInstance } from "class-transformer";

@Injectable()
export class AppliesService {
  private readonly logger = new Logger(AppliesService.name);

  constructor(private readonly prisma: PostgresService) {}

  async upsert(upsertApplyDto: UpsertApplyRequestDto) {
    const { team_id, message, apply_status, apply_from } = upsertApplyDto;

    try {
      this.logger.log(
        `Upserting apply record for user ${upsertApplyDto.user_id} and team ${team_id}`,
      );

      const result = await this.prisma.apply_history.upsert({
        where: {
          user_id_team_id: {
            user_id: upsertApplyDto.user_id,
            team_id,
          },
        },
        update: {
          message: message,
          apply_status: apply_status,
          apply_from: apply_from,
          updated_at: new Date(),
        },
        create: {
          user_id: upsertApplyDto.user_id,
          team_id,
          message,
          apply_status: apply_status || "SUBMITTED",
          apply_from: apply_from || "INDIVIDUAL",
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
}
