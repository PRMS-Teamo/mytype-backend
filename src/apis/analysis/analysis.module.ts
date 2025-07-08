import { Module } from "@nestjs/common";
import { AnalysisService } from "./analysis.service";
import { AnalysisController } from "./analysis.controller";
import { PostgresService } from "@/prisma/postgres/postgres.service";

@Module({
  imports: [],
  controllers: [AnalysisController],
  providers: [AnalysisService, PostgresService],
})
export class AnalysisModule {}
