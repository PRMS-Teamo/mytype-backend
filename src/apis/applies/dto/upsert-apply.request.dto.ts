import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { apply_status } from "@postgres-client";

export class UpsertApplyRequestDto {
  @ApiProperty({ description: "지원 메시지", required: false })
  @IsOptional()
  @IsString()
  message?: string;

  @ApiProperty({
    description: "지원 상태",
    required: false,
    enum: apply_status,
    example: "SUBMITTED",
  })
  @IsOptional()
  @IsEnum(apply_status)
  apply_status?: apply_status;
}
