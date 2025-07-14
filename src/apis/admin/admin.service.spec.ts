import { Test, TestingModule } from "@nestjs/testing";
import { AdminService } from "./admin.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";

describe("AdminService", () => {
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminService, PostgresService],
    }).compile();

    service = module.get<AdminService>(AdminService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
