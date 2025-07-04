import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "@/databases/prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findUserByExternalId(externalId: string) {
    //return interface 정의 필요
    const user = await this.prisma.user_auths.findFirst({
      where: {
        external_id: externalId,
      },
      include: {
        users: true,
      },
    });
    if (!user) {
      throw new NotFoundException(
        "해당 아이디에 해당하는 유저가 존재하지 않습니다.",
      );
    }
    return user;
  }

  async findStacks(stackName: string) {
    const isExist = await this.prisma.stacks.findFirst({
      where: {
        name: stackName,
      },
    });
    return isExist;
  }

  async updateUserInfoByExternalId(externalId: string, userInfo: any) {
    const targetUser = await this.findUserByExternalId(externalId);
    if (!targetUser) {
      throw new NotFoundException("잘못된 유저 정보 입력.");
    }
    const stack_ids: string[] = [];
    for (const stack of userInfo["stacks"]) {
      const stackInfo = await this.prisma.stacks.findFirst({
        where: {
          name: stack,
        },
      });
      if (!stackInfo) {
        throw new NotFoundException(
          "해당 스택에 대한 정보를 찾을 수 없습니다.",
        );
      }
      stack_ids.push(stackInfo["id"]);
    }
    const positionInfo = await this.prisma.positions.findFirst({
      where: {
        name: userInfo["position"],
      },
    });
    if (!positionInfo) {
      throw new NotFoundException("해당 포지션을 찾을 수 없습니다.");
    }

    // 스택 아이디까지 저장해뒀으니, 해당 유저의 정보를 찾고 지운 후 스택값을 다시 넣는 방식 선택
    await this.prisma.$transaction(async (tx) => {
      // step 1. 삭제 시도
      await tx.user_stacks.deleteMany({
        where: {
          user_id: targetUser.users.id,
        },
      });

      // 2. 스택 id 리스트를 insert
      for (const stack_id of stack_ids) {
        await tx.user_stacks.create({
          data: {
            user_id: targetUser.users.id,
            stack_id,
          },
        });
      }

      // 3. 유저 정보 업데이트
      await tx.users.update({
        where: {
          id: targetUser.users.id,
        },
        data: {
          position_id: positionInfo["id"],
          github_url: userInfo.github_url,
          address: userInfo.address,
          img: userInfo.img,
          nickname: userInfo.nickname,
          preferred_meeting: userInfo.preferred_meeting,
          updated_at: new Date(),
        },
      });
    });
    return { message: "유저 정보 및 스택이 성공적으로 업데이트 되었습니다." };
  }

  async getJoinStatusByUuid(uuid: string) {
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

  async updateJoinStatusByUuid(uuid: string, status: boolean) {
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
}
