import { Test, TestingModule } from "@nestjs/testing";
import { AppliesController } from "./applies.controller";
import { AppliesService } from "./applies.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { TeamsService } from "../teams/teams.service";

describe("AppliesController", () => {
  let controller: AppliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppliesController],
      providers: [
        AppliesService,
        {
          provide: PostgresService,
          useValue: {
            findMany: jest.fn(),
            findFirst: jest.fn(),
          },
        },
        {
          provide: TeamsService,
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AppliesController>(AppliesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
