import {
  BadRequestException,
  Injectable,
} from "@nestjs/common";
import { PrismaService } from "@/databases/prisma/prisma.service";
import { UsersService } from "@/apis/users/users.service";

@Injectable()
export class TeamsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async createTeam(data) {
    const userUUID = data.user_id;
    const checkUUID = await this.usersService.getJoinStatusByUuid(userUUID);
    if (checkUUID) {
      throw new BadRequestException("이미 팀에 소속되어있는 인원입니다.");
    }

    const createTeamTransaction = await this.prisma.$transaction(async (tx) => {
      // step 1. 팀 생성
      await tx.teams.create({
        data,
      });

      // step 2. 생성 유저 정보 업데이트
      await this.usersService.updateJoinStatusByUuid(userUUID, true);

      return { message: "팀 정상 생성" };
    });

    return createTeamTransaction;
  }
}
