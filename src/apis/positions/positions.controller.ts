import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UseGuards,
} from "@nestjs/common";
import { PositionService } from "./positions.service";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";
import { Response } from "express";
import { CreatePositionDto } from "./dto/create-position.dto";
import { GetPositionDto } from "./dto/get-position.dto";
import { ApiOkResponse, ApiTags, ApiProperty } from "@nestjs/swagger";
import { wrapPositionsResponse } from "./utils/position-mapping.util";

// 응답 DTO 정의
export class GetPositionsResponseDto {
  @ApiProperty({
    description: "포지션 목록",
    type: [GetPositionDto],
  })
  positions: GetPositionDto[];
}

@ApiTags("positions")
@Controller("positions")
export class PositionsController {
  constructor(private readonly positionsService: PositionService) {}

  /**
   * 방법 1: 래핑된 응답 구조 (DTO 사용)
   */
  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: "모든 포지션 조회 (래핑된 구조)",
    type: GetPositionsResponseDto,
  })
  async findAll(): Promise<GetPositionsResponseDto> {
    const positions = await this.positionsService.getAllPositions();

    // 최상위 키로 래핑
    return wrapPositionsResponse(positions);
  }

  /**
   * 방법 2: 매핑 유틸리티 사용 (가장 깔끔)
   */
  @Get("mapped")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: "모든 포지션 조회 (매핑 유틸리티)",
    schema: {
      type: "object",
      properties: {
        positions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              positionId: { type: "string" },
              positionName: { type: "string" },
            },
          },
        },
      },
    },
  })
  async findAllMapped() {
    // 서비스에서 이미 매핑된 구조로 리턴
    return await this.positionsService.getAllPositionsWithMapping();
  }

  /**
   * 방법 3: Plain Object로 직접 구조화
   */
  @Get("direct")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: "모든 포지션 조회 (직접 구조화)",
    schema: {
      type: "object",
      properties: {
        positions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              positionId: { type: "string" },
              positionName: { type: "string" },
            },
          },
        },
      },
    },
  })
  async findAllDirect() {
    const positions =
      await this.positionsService.getAllPositionsAsPlainObjects();

    // 직접 원하는 구조로 변환
    return {
      positions: positions.map((position) => ({
        positionId: position.id,
        positionName: position.name,
      })),
    };
  }

  @Get("plain")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: "모든 포지션 조회 (Plain Object 방식)",
    schema: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
        },
      },
    },
  })
  findAllAsPlainObjects() {
    return this.positionsService.getAllPositionsAsPlainObjects();
  }

  @Get(":name")
  @UseGuards(JwtAuthGuard)
  findOne(@Param("name") name: string, @Res() res: Response) {
    const positionsFiltered = this.positionsService.getPositionIdByName(name);
    return res.status(200).json({ positions: [positionsFiltered] });
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createPositionDto: CreatePositionDto, @Res() res: Response) {
    const position = this.positionsService.createPosition(
      createPositionDto.name,
    );
    return res.status(200).json({ position });
  }
}
