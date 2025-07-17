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
  position_id?: string | undefined;
  /** 이름 */
  name?: string | undefined;
  /** 이메일 */
  email?: string | undefined;
  /** 닉네임 */
  nickname?: string | undefined;
  /** GitHub ID */
  github_id?: string | undefined;
  /** 이미지 ID */
  img_id?: string | undefined;
  /** 프로필 이미지 URL */
  img_url?: string | undefined;
  /** 주소 */
  address?: string | undefined;
  /** 가입 상태 */
  join_status?: boolean | undefined;
  /** 프로필 공개 여부 */
  is_public?: boolean | undefined;
  /** 자기소개 */
  description?: string | undefined;
  /** 진행 방식 */
  proceed_type?: string | undefined;
  /** 사용자 스택 정보 */
  user_stacks?:
    | Array<{
        stack_id: string;
        stack_name: string | undefined;
        stack_img: string | undefined;
      }>
    | [];
  /** 역할 */
  role?: string | undefined;
  /** 초보자 여부 */
  beginner?: boolean | undefined;
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
  name?: string;
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
