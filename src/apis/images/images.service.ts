import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { S3Service } from "@/infrastructure/storage/files/s3/s3.service";

@Injectable()
export class ImagesService {
  constructor(
    private readonly postgresService: PostgresService,
    private readonly s3Service: S3Service,
  ) {}

  async findImageByImageId(imageId: string) {
    if (!imageId || imageId.trim() === "") {
      return null;
    }

    const image = await this.postgresService.images.findFirst({
      where: {
        id: imageId,
      },
      select: {
        url: true,
      },
    });
    if (!image) {
      throw new NotFoundException("이미지가 존재하지 않습니다.");
    }
    return await this.s3Service.getFileUrl(image.url);
  }

  async findAll() {
    const urls: { id: string; url: string }[] =
      await this.postgresService.images.findMany({
        select: {
          id: true,
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
      url.url = (await this.s3Service.getFileUrl(url.url)) || "";
    }
    return urls;
  }
}
