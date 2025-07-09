import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsEnum, IsString } from "class-validator";
import { apply_status } from "@postgres-client";

export class UpdateStatusDto {
  @ApiProperty({ description: "팀 ID", required: true })
  @IsOptional()
  @IsString()
  teamId: string;

  @ApiProperty({ description: "대상 유저 ID", required: true })
  @IsOptional()
  @IsString()
  targetUserId: string;

  @ApiProperty({ description: "답변", required: true })
  @IsOptional()
  @IsString()
  reply?: string;

  @ApiProperty({ description: "지원 상태", required: true })
  @IsOptional()
  @IsEnum(apply_status)
  apply_status: apply_status;
}
