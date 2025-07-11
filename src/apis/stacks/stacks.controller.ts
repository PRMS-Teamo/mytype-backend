import { Controller, Get, Param, UseGuards } from "@nestjs/common";
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
  async findAll(): Promise<StacksResponse> {
    // 서비스에서 이미 { stacks: [...] } 구조로 리턴하므로 중복 래핑 방지
    return await this.stacksService.getAllStacksWithMapping();
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
