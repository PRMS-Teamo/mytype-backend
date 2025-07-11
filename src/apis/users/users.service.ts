import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";

@Injectable()
export class UsersService {
  constructor(private postgresService: PostgresService) {}

  async findUserByExternalId(externalId: string) {
    const user = await this.postgresService.user_auths.findFirst({
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
    const user = await this.postgresService.users.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        position_id: true,
        nickname: true,
        email: true,
        github_id: true,
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
    const isExist = await this.postgresService.stacks.findFirst({
      where: {
        name: stackName,
      },
    });
    return isExist;
  }

  async findUsers(start: number, end: number) {
    const pageSize = end - start;
    const users = await this.postgresService.users.findMany({
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
    await this.postgresService.$transaction(async (tx) => {
      await tx.user_stacks.deleteMany({
        where: {
          user_id,
        },
      });
      await tx.user_stacks.createMany({
        data: stack_ids.map((stack_id) => ({
          user_id,
          stack_id,
        })),
      });
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
    const isJoined = await this.postgresService.users.findFirst({
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

  async updateJoinStatusByUuid(
    uuid: string,
    status: boolean,
    tx?: PostgresService,
  ) {
    const client = tx ?? this.postgresService;
    const updateJoin = await client.users.update({
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

  async checkNullInfo(uuid: string) {
    const userInfo = await this.findUserByUserId(uuid);
    const isValid = Object.entries(userInfo).every(([key, value]) => {
      if (key === "join_status") return true;
      if (value === null) return false;
      if (key === "user_stacks" && Array.isArray(value) && value.length === 0)
        return false;
      return true;
    });
    return isValid;
  }

  async checkOwner(uuid: string) {
    const findMyTeam = await this.postgresService.teams.findFirst({
      where: {
        user_id: uuid,
      },
    });
    if (!findMyTeam) {
      return false;
    } else {
      return true;
    }
  }
}
