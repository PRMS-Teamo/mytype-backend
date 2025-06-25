import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEmail } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({ description: "관리자 ID" })
  @IsString()
  id: string;

  @ApiProperty({ description: "관리자 이름" })
  @IsString()
  name: string;

  @ApiProperty({ description: "관리자 이메일" })
  @IsEmail()
  email: string;

  @ApiProperty({ description: "관리자 권한 레벨", required: false })
  @IsOptional()
  @IsString()
  role?: string;
}
