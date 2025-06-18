import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-kakao";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, "kakao") {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.get('KAKAO_API_KEY') as string,
      callbackURL: `${configService.get('BE_URL')}/auth/kakao/callback`,
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: any) {
    console.log('kakao login 정보', JSON.stringify(profile, null, 2))
    done(null, profile);
  }
}
