import { Test, TestingModule } from "@nestjs/testing";
import { TeamsController } from "./teams.controller";
import { TeamsService } from "./teams.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { UsersService } from "../users/users.service";

describe("TeamsController", () => {
  let controller: TeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [
        TeamsService,
        {
          provide: PostgresService,
          useValue: {
            findFirst: jest.fn(),
          },
        },
        {
          provide: UsersService,
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TeamsController>(TeamsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
