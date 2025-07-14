import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsEnum } from "class-validator";
import { apply_status } from "@postgres-client";

export class UpdateStatusDto {
  @ApiProperty({ description: "지원 상태", required: true })
  @IsOptional()
  @IsEnum(apply_status)
  apply_status: apply_status;
}
