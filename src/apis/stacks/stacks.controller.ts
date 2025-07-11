import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { StacksService } from "./stacks.service";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";

@Controller("stacks")
export class StacksController {
  constructor(private readonly stacksService: StacksService) {}

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  findOne(@Param("id") id: string) {
    return this.stacksService.getStackIdByName(id);
  }
}
