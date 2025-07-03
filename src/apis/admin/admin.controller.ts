import { Controller, Post, Body } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { stackDetails } from "@/apis/admin/dto/add-stack.dto";

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post("addPlatform")
  addKakao(@Body() data: object) {
    return this.adminService.addPlatform(data);
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
}
