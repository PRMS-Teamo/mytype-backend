import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../entities/user.entity";

/**
 * 사용자 스택 정보 인터페이스
 */
export interface UserStack {
  stackId: string;
  stackName: string | null;
  stackImg: string;
}

/**
 * 사용자 조회 응답 DTO - User 엔티티를 기반으로 생성
 * 단일 사용자 정보 조회 시 반환되는 모든 정보를 포함
 */
export class GetUserResDto {
  @ApiProperty({
    example: "38bf2516-7ee3-40f4-b390-7075e55baf8e",
    description: "사용자 고유 ID",
  })
  id: string;

  @ApiProperty({
    example: "니크네이므",
    description: "사용자 닉네임",
    required: false,
  })
  nickname?: string;

  @ApiProperty({
    example: "user@example.com",
    description: "사용자 이메일",
    required: false,
  })
  email?: string;

  @ApiProperty({
    example: "https://github.com/username",
    description: "GitHub 프로필 URL",
    required: false,
  })
  github?: string;

  @ApiProperty({
    example: "38bf2516-7ee3-40f4-b390-7075e55baf8e",
    description: "이미지 ID",
    required: false,
  })
  imgId?: string;

  @ApiProperty({
    example: "https://example.com/profile.jpg",
    description: "프로필 이미지 URL",
    required: false,
  })
  profileImage?: string | null;

  @ApiProperty({
    example: "서울특별시 강남구",
    description: "사용자 주소",
    required: false,
  })
  location?: string;

  @ApiProperty({
    example: true,
    description: "가입 완료 상태",
    required: false,
  })
  isJoined?: boolean;

  @ApiProperty({
    example: true,
    description: "프로필 공개 여부",
    required: false,
  })
  isPublic?: boolean;

  @ApiProperty({
    example: "38bf2516-7ee3-40f4-b390-7075e55baf8e",
    description: "포지션 ID",
    required: false,
  })
  positionId?: string;

  @ApiProperty({
    example: "안녕하세요. 풀스택 개발자입니다.",
    description: "사용자 자기소개",
    required: false,
  })
  description?: string;

  @ApiProperty({
    example: "ONLINE",
    description: "진행 방식 (ONLINE/OFFLINE/BOTH)",
    required: false,
    enum: ["ONLINE", "OFFLINE", "BOTH"],
  })
  proceedType?: string;

  @ApiProperty({
    example: "USER",
    description: "사용자 역할",
    required: false,
  })
  role?: string;

  @ApiProperty({
    example: "John Doe",
    description: "사용자 이름",
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: [
      {
        stackId: "stack1-uuid",
        stackName: "React",
        imgUrl: "https://example.com/react.png",
      },
      {
        stackId: "stack2-uuid",
        stackName: "Node.js",
        imgUrl: "https://example.com/nodejs.png",
      },
    ],
    description: "사용자 스택 정보 배열 (상세 정보 포함)",
    required: false,
  })
  positionName?: string;

  @ApiProperty({
    example: "2024-01-15T10:30:00Z",
    description: "계정 생성일",
    required: false,
  })
  createdAt?: string;

  @ApiProperty({
    example: "2024-01-20T14:45:00Z",
    description: "마지막 업데이트일",
    required: false,
  })
  updatedAt?: string;

  @ApiProperty({
    example: true,
    description: "초보자 여부",
    required: false,
  })
  beginner?: boolean;

  userStacks?:
    | Array<{
        stackId: string;
        stackName: string | null;
        imgUrl: string | null;
      }>
    | [];

  constructor(user: User) {
    this.id = user.id;
    this.nickname = user.nickname;
    this.email = user.email;
    this.github = user.github;
    this.imgId = user.imgId;
    this.profileImage = user.profileImage;
    this.location = user.location;
    this.isJoined = user.isJoined;
    this.isPublic = user.isPublic;
    this.positionId = user.positionId;
    this.role = user.role;
    this.name = user.name;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.beginner = user.beginner;
    this.description = user.description;
    this.proceedType = user.proceedType;
    this.role = user.role;
    this.name = user.name;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.beginner = user.beginner;
    this.userStacks = user.userStacks as Array<{
      stackId: string;
      stackName: string | null;
      imgUrl: string | null;
    }>;
  }
}
