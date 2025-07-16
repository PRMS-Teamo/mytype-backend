import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { StacksService } from "./stacks.service";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { StacksResponse } from "./utils/stack-mapping.util";

@ApiTags("stacks")
@Controller("stacks")
export class StacksController {
  constructor(private readonly stacksService: StacksService) {}

  /**
   * 매핑 유틸리티 사용 - 자동 JSON 직렬화
   */
  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: "모든 스택 조회 (매핑 유틸리티)",
    schema: {
      type: "object",
      properties: {
        stacks: {
          type: "array",
          items: {
            type: "object",
            properties: {
              stackId: { type: "string" },
              stackName: { type: "string" },
            },
          },
        },
      },
    },
  })
  async findAll(
    @Query("page") page: string = "1",
    @Query("limit") limit: string = "20",
  ): Promise<StacksResponse> {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const start = (pageNum - 1) * limitNum;
    const end = start + limitNum;
    return await this.stacksService.getAllStacksWithMapping(start, end);
  }

  @Get(":name")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: "스택명으로 스택 ID 조회",
    schema: {
      type: "object",
      properties: {
        stackId: { type: "string" },
      },
    },
  })
  async findOne(@Param("name") name: string) {
    const stackId = await this.stacksService.getStackIdByName(name);

    // 일관된 응답 구조
    return {
      stackId: stackId,
    };
  }
}
