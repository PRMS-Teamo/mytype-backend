import { Test, TestingModule } from "@nestjs/testing";
import { AnalysisService } from "./analysis.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";

describe("AnalysisService", () => {
  let service: AnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalysisService, PostgresService],
    }).compile();

    service = module.get<AnalysisService>(AnalysisService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
