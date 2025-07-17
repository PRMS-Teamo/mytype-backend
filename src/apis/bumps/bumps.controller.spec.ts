import { Test, TestingModule } from "@nestjs/testing";
import { BumpsController } from "./bumps.controller";
import { BumpsService } from "./bumps.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";

describe("BumpsController", () => {
  let controller: BumpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BumpsController],
      providers: [
        BumpsService,
        {
          provide: PostgresService,
          useValue: {
            findMany: jest.fn(),
            findFirst: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<BumpsController>(BumpsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
