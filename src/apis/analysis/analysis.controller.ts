import { Controller, Get } from "@nestjs/common";
import { AnalysisService } from "./analysis.service";

@Controller("analysis")
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}

  @Get()
  getSupplyDemand() {
    return this.analysisService.getSupplyDemand();
  }
}
