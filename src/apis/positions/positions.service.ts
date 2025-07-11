import { Injectable, NotFoundException } from "@nestjs/common";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";

@Injectable()
export class PositionService {
  constructor(private readonly postgres: PostgresService) {}

  async getPositionIdByName(name: string) {
    const positionInfo = await this.postgres.positions.findFirst({
      where: {
        name,
      },
    });
    if (!positionInfo) {
      throw new NotFoundException("해당 역할에 대한 아이디를 찾지 못했습니다.");
    }
    return positionInfo.id;
  }
}
