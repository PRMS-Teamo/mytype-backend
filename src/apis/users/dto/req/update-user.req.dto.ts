import { ApiProperty, PartialType, OmitType } from "@nestjs/swagger";
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
 * 사용자 수정 요청 DTO - User 엔티티를 기반으로 생성
 * 수정 불가능한 필드들은 제외하고 모든 필드를 선택적으로 만듦
 */
export class UpdateUserReqDto extends PartialType(
  OmitType(User, [
    "id",
    "isJoined", // 가입 상태는 시스템에서 관리
    "createdAt",
    "updatedAt",
    "role", // 역할은 관리자가 별도 관리
  ] as const),
) {
  @ApiProperty({
    example: "새로운닉네임",
    description: "사용자 닉네임",
    required: false,
  })
  @IsOptional()
  @IsString()
  nickname?: string;

  @ApiProperty({
    example: "newemail@example.com",
    description: "사용자 이메일",
    required: false,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    example: "new_github_username",
    description: "GitHub 사용자명",
    required: false,
  })
  @IsOptional()
  @IsString()
  github?: string;

  @ApiProperty({
    example: "https://example.com/newprofile.jpg",
    description: "프로필 이미지 URL",
    required: false,
  })
  @IsOptional()
  @IsString()
  profileImage?: string;

  @ApiProperty({
    example: "부산광역시 해운대구",
    description: "사용자 주소",
    required: false,
  })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({
    example: false,
    description: "프로필 공개 여부",
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @ApiProperty({
    example: "new-position-uuid",
    description: "포지션 ID",
    required: false,
  })
  @IsOptional()
  @IsString()
  positionId?: string;

  @ApiProperty({
    example: "새로운 자기소개입니다.",
    description: "사용자 자기소개",
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: "OFFLINE",
    description: "진행 방식",
    enum: ["ONLINE", "OFFLINE", "BOTH"],
    required: false,
  })
  @IsOptional()
  @IsEnum(["ONLINE", "OFFLINE", "BOTH"])
  proceedType?: string;

  @ApiProperty({
    example: "Jane Doe",
    description: "사용자 이름",
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: ["newstack1-uuid", "newstack2-uuid"],
    description: "사용자 스택 ID 배열",
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  userStacks?: string[];
}
