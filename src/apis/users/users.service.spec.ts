import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";

describe("UsersService", () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PostgresService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
