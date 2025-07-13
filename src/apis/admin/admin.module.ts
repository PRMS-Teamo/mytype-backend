import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { SchedulerModule } from "@/infrastructure/scheduler/scheduler.module";

@Module({
  imports: [SchedulerModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
