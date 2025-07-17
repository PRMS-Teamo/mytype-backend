import { Test, TestingModule } from "@nestjs/testing";
import { ImagesService } from "@/apis/images/images.service";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { S3Service } from "@/infrastructure/storage/files/s3/s3.service";

describe("ImagesService", () => {
  let service: ImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<ImagesService>(ImagesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
