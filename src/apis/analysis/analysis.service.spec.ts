import { Test, TestingModule } from "@nestjs/testing";
import { AnalysisService } from "./analysis.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { StacksService } from "../stacks/stacks.service";

describe("AnalysisService", () => {
  let service: AnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnalysisService,
        {
          provide: PostgresService,
          useValue: {
            findMany: jest.fn(),
            findFirst: jest.fn(),
          },
        },
        {
          provide: StacksService,
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AnalysisService>(AnalysisService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
