import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { PrismaService } from "@/databases/prisma/prisma.service";

@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaService) {}

  async getJoinStatus(uuid: string) {
    const isJoined = await this.prisma.users.findFirst({
      where: {
        id: uuid,
      },
    });
    if (!isJoined) {
      throw new InternalServerErrorException(
        "로그인 유저 정보를 찾는 과정에서 에러가 발생했습니다.",
      );
    }
    return isJoined.join_status;
  }

  async updateJoinStatus(uuid: string, status: boolean) {
    const updateJoin = await this.prisma.users.update({
      where: {
        id: uuid,
      },
      data: {
        join_status: status,
      },
    });
    if (!updateJoin) {
      throw new InternalServerErrorException(
        "참여 정보를 업데이트 하는 과정에서 오류 발생",
      );
    }
    return true;
  }

  async createTeam(data) {
    const userUUID = data.user_id;
    const checkUUID = await this.getJoinStatus(userUUID);
    if (checkUUID) {
      throw new BadRequestException("이미 팀에 소속되어있는 인원입니다.");
    }

    const createTeamTransaction = await this.prisma.$transaction(async (tx) => {
      // step 1. 팀 생성
      await tx.teams.create({
        data,
      });

      // step 2. 생성 유저 정보 업데이트
      await this.updateJoinStatus(userUUID, true);

      return { message: "팀 정상 생성" };
    });

    return createTeamTransaction;
  }
}
