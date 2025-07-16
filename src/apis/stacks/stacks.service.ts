import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { PositionService } from "../positions/positions.service";
import {
  mapToStacksResponse,
  StacksResponse,
} from "./utils/stack-mapping.util";

@Injectable()
export class StacksService {
  constructor(
    private readonly postgresService: PostgresService,
    private readonly positionService: PositionService,
  ) {}

  async getAllStacksWithMapping(
    start: number,
    end: number,
  ): Promise<StacksResponse> {
    const pageSize = end - start;
    const stacks = await this.postgresService.stacks.findMany({
      select: {
        id: true,
        name: true,
        img_url: true,
      },
      skip: start,
      take: pageSize,
    });
    return mapToStacksResponse(stacks);
  }

  async getStackIdByName(name: string): Promise<string> {
    const stackInfo = await this.postgresService.stacks.findFirst({
      where: {
        name: name,
      },
    });
    if (!stackInfo) {
      throw new NotFoundException(`Stack with name "${name}" not found`);
    }
    return stackInfo.id;
  }

  async getStackIdsByStackObject(obj: Record<string, string[]>): Promise<{
    position: Record<string, string>;
    stacks: Record<string, string>;
  }> {
    const positionObj = {};
    const stackObj = {};
    for (const [position, stacks] of Object.entries(obj)) {
      const position_id =
        await this.positionService.getPositionIdByName(position);
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
