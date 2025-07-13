/**
 * @description 모든 소셜 로그인 Strategy가 반환해야 하는 표준화된 프로필 형식
 * OAuth 콜백에서만 사용됨
 */
export interface SocialUserProfile {
  provider?: string;
  externalId: string;
  name: string;
  displayName?: string;
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
