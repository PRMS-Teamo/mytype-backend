import { IsNotEmpty, IsString } from "class-validator";
import { Position } from "../entities/position.entity";
import { ApiProperty, PartialType } from "@nestjs/swagger";

export class GetPositionDto extends PartialType(Position) {
  constructor(position: { id: string; name: string }) {
    super();
    this.positionId = position.id; // id → positionId
    this.positionName = position.name; // name → positionName
  }

  @ApiProperty({
    description: "포지션 ID",
    example: "62c94818-da31-4b46-8513-06f470eb2126",
  })
  @IsString()
  @IsNotEmpty()
  positionId: string;

  @ApiProperty({
    description: "포지션 이름",
    example: "프론트엔드",
  })
  @IsString()
  @IsNotEmpty()
  positionName: string;
}
