import { Injectable, NotFoundException } from "@nestjs/common";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { Position } from "./entities/position.entity";
import { GetPositionDto } from "./dto/get-position.dto";
import {
  mapToPositionsResponse,
  PositionsResponse,
} from "./utils/position-mapping.util";

@Injectable()
export class PositionService {
  constructor(private readonly postgres: PostgresService) {}

  async getPositionIdByPosition(name: string) {
    const positions = await this.postgres.positions.findFirst({
      where: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });
    if (!positions) {
      throw new NotFoundException("해당 역할에 대한 아이디를 찾지 못했습니다.");
    }
    return new GetPositionDto(positions);
  }

  async getAllPositions(): Promise<GetPositionDto[]> {
    const positions = await this.postgres.positions.findMany({
      where: {
        name: {
          not: "팀 생성자",
        },
      },
      select: {
        id: true,
        name: true,
      },
    });
    console.log("DB 조회 결과:", positions);

    // 방법 1: DTO 인스턴스 사용 (생성자 추가 후)
    const dtoInstances = positions.map(
      (position) => new GetPositionDto(position),
    );
    console.log("DTO 인스턴스:", dtoInstances);

    return dtoInstances;
  }

  // 방법 2: Plain Object 리턴 (안전한 방법)
  async getAllPositionsAsPlainObjects() {
    const positions = await this.postgres.positions.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    // Plain Object로 리턴 (항상 작동함)
    return positions.map((position) => ({
      id: position.id,
      name: position.name,
    }));
  }

  // 방법 3: 매핑 유틸리티 사용 (가장 깔끔)
  async getAllPositionsWithMapping(): Promise<PositionsResponse> {
    const positions = await this.postgres.positions.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    // 매핑 유틸리티로 한 번에 변환
    return mapToPositionsResponse(positions);
  }

  async getPositionIdByName(name: string) {
    const positions = await this.postgres.positions.findMany({
      where: {
        name,
      },
    });
    if (!positions) {
      throw new NotFoundException("해당 역할에 대한 아이디를 찾지 못했습니다.");
    }
    return positions.map((position) => new Position(position));
  }

  async createPosition(name: string) {
    const position = await this.postgres.positions.create({
      data: { name },
    });
    return position;
  }
}
