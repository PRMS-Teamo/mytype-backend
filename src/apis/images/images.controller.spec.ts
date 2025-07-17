import { Test, TestingModule } from "@nestjs/testing";
import { ImagesController } from "@/apis/images/images.controller";
import { ImagesService } from "@/apis/images/images.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { S3Service } from "@/infrastructure/storage/files/s3/s3.service";

describe("ImagesController", () => {
  let controller: ImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagesController],
      providers: [
        ImagesService,
        {
          provide: PostgresService,
          useValue: {
            findMany: jest.fn(),
            findFirst: jest.fn(),
          },
        },
        {
          provide: S3Service,
          useValue: {
            getFileUrl: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ImagesController>(ImagesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
