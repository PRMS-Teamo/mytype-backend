import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class CreateApplyDto {
  @ApiProperty({ description: "지원자 ID" })
  @IsString()
  userId: string;

  @ApiProperty({ description: "지원할 팀 ID" })
  @IsString()
  teamId: string;

  @ApiProperty({ description: "지원 메시지", required: false })
  @IsOptional()
  @IsString()
  message?: string;

  @ApiProperty({ description: "지원 상태", required: false })
  @IsOptional()
  @IsString()
  status?: string;
}
