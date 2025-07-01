import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@/databases/prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findUserByExternalId(externalId: string) {
    const user = await this.prisma.user_auths.findFirst({
      where: {
        external_id: externalId,
      },
      include: {
        users: true,
      },
    });
    return user;
  }

  async updateUserInfoByExternalId(externalId: string, userInfo: any) {
    const targetUser = await this.findUserByExternalId(externalId);
    if (!targetUser) {
      throw new NotFoundException("잘못된 유저 정보 입력.");
    }

    return this.prisma.users.update({
      where: { id: targetUser.users.id },
      data: {
        ...userInfo,
        updated_at: new Date(),
      },
    });
  }
}
