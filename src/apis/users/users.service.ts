import { Injectable } from "@nestjs/common";
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
}
