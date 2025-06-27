export interface KakaoProfileResponse {
  id: string;
  username?: string;
  displayName?: string;
  _json?: {
    id: number;
    connected_at: string;
    properties: {
      nickname?: string;
      profile_image?: string;
      thumbnail_image?: string;
    };
  };
}

export type User = Pick<
  KakaoProfileResponse,
  "id" | "username" | "displayName"
>;
