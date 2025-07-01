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

export interface User {
  kakaoId: string;
  username: string;
  displayName: string;
  status: "DONE" | "NEW";
}

export type TokenPayload = Pick<User, "kakaoId" | "username" | "displayName">;
