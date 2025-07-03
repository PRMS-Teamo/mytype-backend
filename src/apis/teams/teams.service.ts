import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "@/databases/prisma/prisma.service";

@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaService) {}

  async createTeam(data) {
    console.log(data);
    const createTeamInfo = await this.prisma.teams.create({
      data,
    });
    if (!createTeamInfo) {
      throw new InternalServerErrorException("팀 생성 중 오류가 발생했습니다.");
    }
    return { message: "정상적으로 팀 생성을 완료했습니다." };
  }
}
