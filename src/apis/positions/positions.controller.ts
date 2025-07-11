import { Controller, Get, UseGuards } from "@nestjs/common";
import { PositionService } from "./positions.service";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";

@Controller("positions")
export class PositionsController {
  constructor(private readonly positionsService: PositionService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.positionsService.getPositionIdByName("프론트엔드");
  }
}
