import { Controller, Post, Body, Get } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { stackDetails } from "@/apis/admin/dto/add-stack.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { SchedulerService } from "@/infrastructure/scheduler/scheduler.service";

@Controller("admin")
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly schedulerService: SchedulerService,
  ) {}

  @Post("addProvider")
  addKakao(@Body() data: object) {
    return this.adminService.addProvider(data);
  }

  @Post("addStackCategory")
  addStackCategory(@Body() data: string[]) {
    return this.adminService.addStackCategory(data);
  }

  @Post("addStack")
  addStack(@Body() data: Record<string, stackDetails>) {
    return this.adminService.addStack(data);
  }

  @Post("addPositions")
  addPositions(@Body() data: string[]) {
    return this.adminService.addPositions(data);
  }

  @Get("scheduler/status")
  @ApiOperation({ summary: "스케줄러 상태 확인" })
  @ApiResponse({ status: 200, description: "스케줄러 상태 조회 성공" })
  getSchedulerStatus() {
    return this.schedulerService.getSchedulerStatus();
  }

  @Post("scheduler/reset-bumps")
  @ApiOperation({ summary: "끌어올리기 수동 초기화" })
  @ApiResponse({ status: 200, description: "끌어올리기 수동 초기화 성공" })
  async manualResetBumps() {
    return await this.schedulerService.manualResetBumps();
  }
}
