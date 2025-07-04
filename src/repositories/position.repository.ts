import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@/databases/prisma/prisma.service";

@Injectable()
export class PositionRepository {
  constructor(private readonly prisma: PrismaService) {}

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
