import { ApiProperty, OmitType } from "@nestjs/swagger";
import {
  IsString,
  IsBoolean,
  IsOptional,
  IsArray,
  IsEmail,
  IsEnum,
} from "class-validator";
import { User } from "../../entities/user.entity";

/**
 * 사용자 생성 요청 DTO - User 엔티티를 기반으로 생성
 * 시스템에서 자동 생성되는 필드들은 제외
 */
export class CreateUserReqDto extends OmitType(User, [
  "id",
  "isJoined",
  "createdAt",
  "updatedAt",
] as const) {
  @ApiProperty({
    example: "닉네임",
    description: "사용자 닉네임",
  })
  @IsString()
  nickname: string;

  @ApiProperty({
    example: "user@example.com",
    description: "사용자 이메일",
    required: false,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    example: "github_username",
    description: "GitHub 사용자명",
    required: false,
  })
  @IsOptional()
  @IsString()
  github?: string;

  @ApiProperty({
    example: "https://example.com/profile.jpg",
    description: "프로필 이미지 URL",
    required: false,
  })
  @IsOptional()
  @IsString()
  profileImage?: string;

  @ApiProperty({
    example: "서울특별시 강남구",
    description: "사용자 주소",
    required: false,
  })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({
    example: true,
    description: "프로필 공개 여부",
    required: false,
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @ApiProperty({
    example: "position-uuid",
    description: "포지션 ID",
    required: false,
  })
  @IsOptional()
  @IsString()
  positionId?: string;

  @ApiProperty({
    example: "안녕하세요. 풀스택 개발자입니다.",
    description: "사용자 자기소개",
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: "ONLINE",
    description: "진행 방식",
    enum: ["ONLINE", "OFFLINE", "BOTH"],
    required: false,
    default: "ONLINE",
  })
  @IsOptional()
  @IsEnum(["ONLINE", "OFFLINE", "BOTH"])
  proceedType?: string;

  @ApiProperty({
    example: "John Doe",
    description: "사용자 이름",
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: ["stack1-uuid", "stack2-uuid"],
    description: "사용자 스택 ID 배열",
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  userStacks?: string[];
}
