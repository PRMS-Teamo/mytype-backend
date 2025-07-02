import { BadRequestException, Injectable } from "@nestjs/common";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { PrismaService } from "@/databases/prisma/prisma.service";

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}
  async addPlatform(data) {
    if (!data.platform) {
      return new BadRequestException("잘못된 요청");
    }
    const checkPlatform = await this.prisma.auth_methods.findFirst({
      where: {
        platform: data.platform,
      },
    });
    if (checkPlatform) {
      return new BadRequestException("이미 존재하는 플랫폼");
    }
    let addObject;
    if (!data.auth_method) {
      addObject = {
        platform: data.platform,
      };
    } else {
      addObject = {
        platform: data.platform,
        auth_method: data.auth_method,
      };
    }
    const addPlatform = await this.prisma.auth_methods.create({
      data: addObject,
    });

    return addPlatform;
  }

  findAll() {
    return "This action returns all admin";
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
