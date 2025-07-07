import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { apply_status, apply_from } from "@/prisma/postgres/postgres-client";

export class UpsertApplyRequestDto {
  @ApiProperty({ description: "사용자 ID" })
  @IsString()
  user_id: string;

  @ApiProperty({ description: "팀 ID" })
  @IsString()
  team_id: string;

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

  @ApiProperty({
    description: "지원 유형",
    required: false,
    enum: apply_from,
    example: "INDIVIDUAL",
  })
  @IsOptional()
  @IsEnum(apply_from)
  apply_from?: apply_from;
}
