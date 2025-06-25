import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEmail } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ description: "사용자 ID" })
  @IsString()
  id: string;

  @ApiProperty({ description: "사용자 이름", required: false })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty({ description: "사용자 이메일", required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: "표시 이름", required: false })
  @IsOptional()
  @IsString()
  displayName?: string;
}
