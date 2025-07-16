import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { S3Service } from "@/infrastructure/storage/files/s3/s3.service";

@Injectable()
export class ImagesService {
  constructor(
    private readonly postgresService: PostgresService,
    private readonly s3Service: S3Service,
  ) {}

  async findAll() {
    const urls: { url: string }[] = await this.postgresService.images.findMany({
      select: {
        url: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    if (!urls.length) {
      throw new NotFoundException("이미지가 존재하지 않습니다.");
    }
    for (const url of urls) {
      url.url = this.s3Service.getFileUrl(url.url);
    }
    return urls;
  }
}
