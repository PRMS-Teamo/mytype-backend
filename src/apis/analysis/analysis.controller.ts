import { Controller, Get, UseGuards } from "@nestjs/common";
import { AnalysisService } from "./analysis.service";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";

@Controller("analysis")
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getSupplyDemand() {
    return this.analysisService.getSupplyDemand();
  }
}
