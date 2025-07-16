import { ApiProperty } from "@nestjs/swagger";
import { AuthenticatedUser } from "@/apis/auth/types/authenticated-user.interface";

/**
 * User 엔티티 - AuthenticatedUser를 클라이언트 친화적 형태로 변환
 * 이 엔티티를 기준으로 모든 DTO들이 확장됩니다.
 */
export class User {
  constructor(user: AuthenticatedUser) {
    // AuthenticatedUser -> User 매핑 (클라이언트 친화적 속성명으로 변환)
    this.id = user.id;
    this.nickname = user.nickname ?? undefined;
    this.email = user.email ?? undefined;
    this.github = user.github_id ?? undefined; // github_id -> github (클라이언트 친화적)
    this.imgId = user.img_id ?? undefined; // img_id -> imgId
    this.profileImage = user.img_url ?? undefined; // img_url -> profileImage
    this.location = user.address ?? undefined; // address -> location
    this.isJoined = user.join_status ?? false; // join_status -> isJoined
    this.isPublic = user.is_public ?? false; // is_public -> isPublic
    this.positionId = user.position_id ?? undefined; // position_id -> positionId

    // 추가 속성들
    this.description = user.description ?? undefined;
    this.proceedType = user.proceed_type ?? "ONLINE"; // proceed_type -> proceedType
    this.role = user.role ?? "USER"; // role
    this.name = user.name ?? undefined; // name
    this.beginner = user.beginner ?? false; // beginner -> beginner

    // user_stacks는 AuthenticatedUser에서 제공
    this.userStacks = user.user_stacks;

    // 시간 정보 (있으면 사용, 없으면 현재 시간)
    this.createdAt = user.create_at ?? new Date().toISOString();
    this.updatedAt = user.updated_at ?? new Date().toISOString();
  }

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
  imgId?: string | undefined;

  @ApiProperty({
    example: "https://example.com/profile.jpg",
    description: "프로필 이미지 URL",
    required: false,
  })
  profileImage?: string;

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
  positionId?: string | undefined;

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
    example: ["stack1-uuid", "stack2-uuid"],
    description: "사용자 스택 ID 배열",
    required: false,
  })
  userStacks?:
    | Array<{
        stack_id: string;
        stack_name: string | null;
        stack_img: string | null;
      }>
    | [];

  @ApiProperty({
    example: "2024-01-15T10:30:00Z",
    description: "마지막으로 끌어올리기 한 시간",
    required: false,
  })
  bumpedAt?: string;

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
}
