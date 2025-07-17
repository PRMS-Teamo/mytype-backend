import { Test, TestingModule } from "@nestjs/testing";
import { AnalysisController } from "./analysis.controller";
import { AnalysisService } from "./analysis.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { StacksService } from "../stacks/stacks.service";

describe("AnalysisController", () => {
  let controller: AnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalysisController],
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

    controller = module.get<AnalysisController>(AnalysisController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
