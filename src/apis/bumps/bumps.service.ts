import { BadRequestException, Injectable } from "@nestjs/common";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { user_bumps } from "@postgres-client";

@Injectable()
export class BumpsService {
  constructor(private readonly postgresService: PostgresService) {}

  async upsertUserBump(userId: string): Promise<user_bumps> {
    const userBumps = await this.postgresService.user_bumps.findFirst({
      where: {
        user_id: userId,
      },
    });

    if (userBumps && userBumps.bump_count >= userBumps.bump_limit) {
      console.log("Bump limit exceeded");
      throw new BadRequestException("Bump limit exceeded");
    }

    return this.postgresService.user_bumps.upsert({
      where: {
        user_id: userId,
      },
      update: {
        bump_count: {
          increment: 1,
        },
        updated_at: new Date(),
      },
      create: {
        user_id: userId,
        bump_count: 1,
        next_available_at: this.getNextAvailableTime(),
      },
    });
  }

  /**
   * 현재 시점으로부터 24시간 후 시간을 계산하는 헬퍼 메서드
   * 스케줄러와 동일한 로직을 사용
   */
  private getNextAvailableTime(): Date {
    const nextAvailable = new Date();
    nextAvailable.setHours(nextAvailable.getHours() + 24);
    return nextAvailable;
  }
}
