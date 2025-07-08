import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PostgresService } from "@/prisma/postgres/postgres.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PostgresService) {}

  async findUserByExternalId(externalId: string) {
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

  async findUserByUserId(user_id: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        id: user_id,
      },
      select: {
        position_id: true,
        nickname: true,
        github_url: true,
        img: true,
        address: true,
        join_status: true,
        advertising: true,
        user_stacks: {
          select: {
            stack_id: true,
          },
        },
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

  async findUsers(start: number, end: number) {
    const pageSize = end - start;
    const users = await this.prisma.users.findMany({
      where: {
        advertising: true,
      },
      skip: start,
      take: pageSize,
    });
    return users;
  }

  async updateUserInfoByUserId(user_id: string, userInfo: any) {
    const targetUser = await this.findUserByUserId(user_id);
    if (!targetUser) {
      throw new NotFoundException("잘못된 유저 정보 입력.");
    }
    const { stack_ids, position_id, ...rest } = userInfo;
    await this.prisma.$transaction(async (tx) => {
      // step1. 기존에 등록한 유저 기술 스택 정보 제거
      await tx.user_stacks.deleteMany({
        where: {
          user_id,
        },
      });
      // step2. 새로 등록할 기술 스택 등록
      await tx.user_stacks.createMany({
        data: stack_ids.map((stack_id) => ({
          user_id,
          stack_id,
        })),
      });
      // step3. 유저 정보 등록
      await tx.users.update({
        where: {
          id: user_id,
        },
        data: {
          positions: {
            connect: {
              id: position_id,
            },
          },
          ...rest,
          updated_at: new Date().toISOString(),
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
