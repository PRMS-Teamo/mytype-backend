import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { AnalysisService } from "./analysis.service";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";

@Controller("analysis")
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getSupplyDemand(
    @Query("page") page: string = "1",
    @Query("limit") limit: string = "20",
  ) {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const start = (pageNum - 1) * limitNum;
    const end = start + limitNum;
    return this.analysisService.getSupplyDemand(start, end);
  }
}
