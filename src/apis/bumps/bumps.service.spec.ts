import { Test, TestingModule } from "@nestjs/testing";
import { BumpsService } from "./bumps.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";

describe("BumpsService", () => {
  let service: BumpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BumpsService, PostgresService],
    }).compile();

    service = module.get<BumpsService>(BumpsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
