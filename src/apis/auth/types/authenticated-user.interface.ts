/**
 * @description JWT 인증을 통해 인증된 사용자 정보입니다.
 * req.user에 설정되는 표준 형식입니다.
 */
export interface AuthenticatedUser {
  /** 데이터베이스 사용자 ID */
  id: string;
  /** 포지션 ID */
  position_id?: string | null;
  /** 닉네임 */
  nickname?: string | null;
  /** GitHub URL */
  github_url?: string | null;
  /** 프로필 이미지 */
  img?: string | null;
  /** 주소 */
  address?: string | null;
  /** 가입 상태 */
  join_status?: boolean | null;
  /** 광고 허용 여부 */
  advertising?: boolean | null;
  /** 사용자 스택 정보 */
  user_stacks?: Array<{ stack_id: string }>;
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
