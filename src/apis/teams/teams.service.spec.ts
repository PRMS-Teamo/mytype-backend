import { Test, TestingModule } from "@nestjs/testing";
import { TeamsService } from "./teams.service";

// 의존성 서비스 import
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { UsersService } from "../users/users.service";

describe("TeamsService", () => {
  let service: TeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeamsService,
        {
          provide: PostgresService,
          useValue: {
            findMany: jest.fn(),
            findFirst: jest.fn(),
            // 필요한 경우 다른 메서드도 추가
          },
        },
        {
          provide: UsersService,
          useValue: {
            findOne: jest.fn(),
            // 필요한 경우 메서드 추가
          },
        },
      ],
    }).compile();

    service = module.get<TeamsService>(TeamsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
