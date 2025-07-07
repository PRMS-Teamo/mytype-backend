import { Injectable, NotFoundException } from "@nestjs/common";
import { PostgresService } from "@/prisma/postgres/postgres.service";

@Injectable()
export class PositionRepository {
  constructor(private readonly prisma: PostgresService) {}

  async getPositionIdByName(name: string) {
    const positionInfo = await this.prisma.positions.findFirst({
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
