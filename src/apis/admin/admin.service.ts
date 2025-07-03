import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "@/databases/prisma/prisma.service";
import { stackDetails } from "@/apis/admin/dto/add-stack.dto";

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

  async addStackCategory(data: string[]) {
    const alreadyExistCategories: string[] = [];
    const newCategories: string[] = [];
    for (const category of data) {
      const isExist = await this.prisma.stack_categories.findFirst({
        where: {
          name: category,
        },
      });
      if (!isExist) {
        const newCategory = await this.prisma.stack_categories.create({
          data: {
            name: category,
          },
        });
        if (!newCategory) {
          return new InternalServerErrorException(
            "DB에 데이터를 추가하는 과정에서 에러가 발생했어요.",
          );
        }
        newCategories.push(category);
      } else {
        alreadyExistCategories.push(category);
      }
    }
    return {
      alreadyExistCategories,
      newCategories,
    };
  }

  async addStack(data: Record<string, stackDetails>) {
    const updatedStacks: string[] = [];
    const newStacks: string[] = [];
    const notChanged: string[] = [];
    for (const [stack, details] of Object.entries(data)) {
      const name = stack.toLowerCase();
      const category = details["category"].toLowerCase();
      const img_url = details["img_url"].toLowerCase();
      const isExist = await this.prisma.stacks.findFirst({
        where: {
          name: name,
        },
      });
      if (!isExist) {
        const category_id = await this.prisma.stack_categories.findFirst({
          where: {
            name: category,
          },
        });
        if (!category_id)
          throw new NotFoundException(
            `${category} 카테고리는 존재하지 않는 카테고리입니다.`,
          );
        const newStack = await this.prisma.stacks.create({
          data: {
            name: name,
            img_url: img_url,
            category_id: category_id["id"],
          },
        });
        if (!newStack)
          throw new InternalServerErrorException(
            "저장 과정에서 에러가 발생했습니다.",
          );
        newStacks.push(name);
      } else {
        const DBimg_url = isExist["img_url"];
        const DBcategory = await this.prisma.stack_categories.findFirst({
          where: {
            id: isExist["category_id"],
          },
        });
        if (!DBimg_url || !DBcategory) {
          throw new InternalServerErrorException(
            "카테고리, 이미지 url을 찾지 못했어요.",
          );
        }
        if (DBimg_url !== img_url || DBcategory.name !== category) {
          const newCategoryInfo = await this.prisma.stack_categories.findFirst({
            where: {
              name: category,
            },
          });
          if (!newCategoryInfo) {
            throw new NotFoundException(
              "해당 카테고리는 존재하지 않는 카테고리입니다.",
            );
          }
          await this.prisma.stacks.update({
            where: {
              id: isExist.id,
            },
            data: {
              img_url: img_url,
              category_id: newCategoryInfo.id,
            },
          });
          updatedStacks.push(name);
        } else {
          notChanged.push(name);
        }
      }
    }
    return {
      newStacks,
      updatedStacks,
      notChanged,
    };
  }
}
