import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber } from "class-validator";

export class CreateTeamDto {
  @ApiProperty({ description: "팀 이름" })
  @IsString()
  name: string;

  @ApiProperty({ description: "팀 설명", required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: "팀 리더 ID" })
  @IsString()
  leaderId: string;

  @ApiProperty({ description: "최대 팀원 수", required: false })
  @IsOptional()
  @IsNumber()
  maxMembers?: number;
}
