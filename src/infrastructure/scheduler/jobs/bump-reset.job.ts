import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { PostgresService } from "../../database/postgres/postgres.service";

@Injectable()
export class BumpResetJob {
  private readonly logger = new Logger(BumpResetJob.name);

  constructor(private readonly postgresService: PostgresService) {}

  /**
   * 10분마다 실행되는 끌어올리기 초기화 작업
   * next_available_at이 현재 시간보다 과거인 사용자들의 bump_count를 0으로 초기화
   */
  @Cron("0 */10 * * * *") // 10분마다 실행
  async resetBumpCounts() {
    try {
      this.logger.log("끌어올리기 초기화 작업 시작");

      const now = new Date();

      // next_available_at이 현재 시간보다 과거인 사용자들 조회
      const expiredBumps = await this.postgresService.user_bumps.findMany({
        where: {
          next_available_at: {
            lte: now,
          },
          bump_count: {
            gt: 0, // bump_count가 0보다 큰 경우만
          },
        },
        select: {
          user_id: true,
        },
      });

      if (expiredBumps.length === 0) {
        this.logger.log("초기화할 끌어올리기 데이터가 없습니다.");
        return;
      }

      // 해당 사용자들의 bump_count를 0으로 초기화하고 next_available_at을 24시간 후로 설정
      const resetResult = await this.postgresService.user_bumps.updateMany({
        where: {
          user_id: {
            in: expiredBumps.map((bump) => bump.user_id),
          },
        },
        data: {
          bump_count: 0,
          next_available_at: this.getNextAvailableTime(),
          updated_at: now,
        },
      });

      this.logger.log(
        `끌어올리기 초기화 완료: ${resetResult.count}명의 사용자 처리`,
      );
    } catch (error) {
      this.logger.error("끌어올리기 초기화 작업 중 오류 발생:", error);
    }
  }

  /**
   * 현재 시점으로부터 24시간 후 시간을 계산하는 헬퍼 메서드
   */
  private getNextAvailableTime(): Date {
    const nextAvailable = new Date();
    nextAvailable.setHours(nextAvailable.getHours() + 24);
    return nextAvailable;
  }

  /**
   * 수동으로 끌어올리기 초기화를 실행하는 메서드 (테스트 또는 관리용)
   */
  async manualResetBumpCounts(): Promise<{ message: string; count: number }> {
    try {
      this.logger.log("수동 끌어올리기 초기화 실행");

      const now = new Date();

      const expiredBumps = await this.postgresService.user_bumps.findMany({
        where: {
          next_available_at: {
            lte: now,
          },
          bump_count: {
            gt: 0,
          },
        },
        select: {
          user_id: true,
        },
      });

      if (expiredBumps.length === 0) {
        return { message: "초기화할 데이터가 없습니다.", count: 0 };
      }

      const resetResult = await this.postgresService.user_bumps.updateMany({
        where: {
          user_id: {
            in: expiredBumps.map((bump) => bump.user_id),
          },
        },
        data: {
          bump_count: 0,
          next_available_at: this.getNextAvailableTime(),
          updated_at: now,
        },
      });

      this.logger.log(`수동 끌어올리기 초기화 완료: ${resetResult.count}명`);

      return {
        message: "수동 초기화가 완료되었습니다.",
        count: resetResult.count,
      };
    } catch (error) {
      this.logger.error("수동 끌어올리기 초기화 중 오류:", error);
      throw error;
    }
  }
}
