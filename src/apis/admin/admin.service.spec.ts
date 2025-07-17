import { Test, TestingModule } from "@nestjs/testing";
import { AdminService } from "./admin.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { UsersService } from "../users/users.service";

describe("AdminService", () => {
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminService,
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

    service = module.get<AdminService>(AdminService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
