import { Test, TestingModule } from "@nestjs/testing";
import { AppliesService } from "./applies.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { TeamsService } from "../teams/teams.service";

describe("AppliesService", () => {
  let service: AppliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<AppliesService>(AppliesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
