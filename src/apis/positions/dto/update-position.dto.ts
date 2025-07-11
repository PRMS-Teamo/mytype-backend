import { IsNotEmpty, IsString } from "class-validator";
import { Position } from "../entities/position.entity";
import { ApiProperty, PartialType } from "@nestjs/swagger";

export class UpdatePositionDto extends PartialType(Position) {
  constructor(position: { id: string; name: string }) {
    super();
    this.id = position.id;
    this.name = position.name;
  }

  @ApiProperty({
    description: "역할 이름",
    example: "프론트엔드",
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
