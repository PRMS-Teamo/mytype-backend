import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class ImagesService {
  constructor(private readonly postgresService: PostgresService) {}

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
    return urls;
  }
}
