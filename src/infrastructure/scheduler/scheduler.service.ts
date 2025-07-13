import { Injectable, Logger } from "@nestjs/common";
import { BumpResetJob } from "./jobs/bump-reset.job";

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name);

  constructor(private readonly bumpResetJob: BumpResetJob) {}

  /**
   * 끌어올리기 수동 초기화 실행
   */
  async manualResetBumps(): Promise<{ message: string; count: number }> {
    this.logger.log("수동 끌어올리기 초기화 요청");
    return await this.bumpResetJob.manualResetBumpCounts();
  }

  /**
   * 스케줄러 상태 확인
   */
  getSchedulerStatus(): { status: string; message: string } {
    return {
      status: "active",
      message:
        "스케줄러가 정상적으로 실행 중입니다. 매일 자정에 끌어올리기 초기화가 실행됩니다.",
    };
  }
}
