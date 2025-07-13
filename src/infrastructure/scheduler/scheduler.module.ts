import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { PostgresModule } from "../database/postgres/postgres.module";
import { SchedulerService } from "./scheduler.service";
import { BumpResetJob } from "./jobs/bump-reset.job";

@Module({
  imports: [ScheduleModule.forRoot(), PostgresModule],
  providers: [SchedulerService, BumpResetJob],
  exports: [SchedulerService],
})
export class SchedulerModule {}
