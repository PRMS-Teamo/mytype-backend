import { PrismaService } from "@/databases/prisma/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { PositionRepository } from "@/repositories/position.repository";

@Injectable()
export class StacksRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly positionRepository: PositionRepository,
  ) {}

  async getStackIdByName(name: string) {
    const stackInfo = await this.prisma.stacks.findFirst({
      where: {
        name: name,
      },
    });
    if (!stackInfo) {
      throw new NotFoundException(`Stack with name "${name}" not found`);
    }
    return stackInfo.id;
  }

  async getStackIdsByStackObject(obj: Record<string, string[]>) {
    const positionObj = {};
    const stackObj = {};
    for (const [position, stacks] of Object.entries(obj)) {
      const position_id =
        await this.positionRepository.getPositionIdByName(position);
      positionObj[position] = position_id;
      const stackDetail = {};
      for (const stack of stacks) {
        const stack_id = await this.getStackIdByName(stack);
        stackDetail[stack] = stack_id;
      }
      stackObj[position] = stackDetail;
    }
    return {
      position: positionObj,
      stacks: stackObj,
    };
  }
}
