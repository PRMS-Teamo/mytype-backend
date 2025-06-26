import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-kakao";
import { ConfigService } from "@nestjs/config";

interface KakaoProfile {
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

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, "kakao") {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.get("KAKAO_API_KEY") as string,
      callbackURL: `${configService.get("URL")}/auth/kakao/callback`,
    });
  }

  validate(
    accessToken: string,
    refreshToken: string,
    profile: KakaoProfile,
    done: (error: any, user?: any) => void,
  ) {
    console.log("kakao login 정보", JSON.stringify(profile, null, 2));
    done(null, profile);
  }
}
