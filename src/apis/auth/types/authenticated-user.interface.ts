/**
 * @description JWT 인증을 통해 인증된 사용자 정보입니다.
 * req.user에 설정되는 표준 형식입니다.
 *
 * 주의: 이 인터페이스는 JWT 토큰에서 제공되는 정보를 나타내며,
 * 실제 데이터베이스 스키마와 완전히 일치하지 않을 수 있습니다.
 */
export interface AuthenticatedUser {
  /** 데이터베이스 사용자 ID */
  id: string;
  /** 포지션 ID */
  position_id?: string | null;
  /** 이름 */
  name?: string | null;
  /** 이메일 */
  email?: string | null;
  /** 닉네임 */
  nickname?: string | null;
  /** GitHub ID */
  github_id?: string | null;
  /** 프로필 이미지 URL */
  img_url?: string | null;
  /** 주소 */
  address?: string | null;
  /** 가입 상태 */
  join_status?: boolean | null;
  /** 프로필 공개 여부 */
  is_public?: boolean | null;
  /** 자기소개 */
  description?: string | null;
  /** 진행 방식 */
  proceed_type?: string | null;
  /** 사용자 스택 정보 */
  user_stacks?: Array<{ stack_id: string }>;
  /** 역할 */
  role?: string | null;
  /** 초보자 여부 */
  beginner?: boolean | null;
  /** 기타 사용자 정보 */
  [key: string]: any;
}

/**
 * @description 소셜 로그인용 사용자 프로필입니다.
 * OAuth 콜백에서만 사용됩니다.
 */
export interface SocialUserProfile {
  provider: string;
  externalId: string;
  name: string;
  email?: string;
  _rawData?: {
    accessToken?: string;
    refreshToken?: string;
    profileImage?: string;
    thumbnailImage?: string;
    ageRange?: string;
    gender?: string;
    [key: string]: any;
  };
}
