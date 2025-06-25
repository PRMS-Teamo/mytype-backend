import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class CreateAuthDto {
  @ApiProperty({ description: "사용자 ID" })
  @IsString()
  userId: string;

  @ApiProperty({ description: "액세스 토큰" })
  @IsString()
  accessToken: string;

  @ApiProperty({ description: "리프레시 토큰", required: false })
  @IsOptional()
  @IsString()
  refreshToken?: string;

  @ApiProperty({ description: "인증 제공자", required: false })
  @IsOptional()
  @IsString()
  provider?: string;
}
