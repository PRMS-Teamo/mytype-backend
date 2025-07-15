import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, Profile } from "passport-kakao";
import { ConfigService } from "@nestjs/config";
import { SocialUserProfile } from "../types/social-user-profile.interface";

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, "kakao") {
  constructor(private configService: ConfigService) {
    const callbackUrl = `${configService.get("REDIRECT_URL")}/auth/kakao/callback`;

    console.log("+++++++++++++Kakao Strategy Configuration:");
    console.log("+++++++++++++Client ID:", configService.get("KAKAO_API_KEY"));
    console.log("+++++++++++++Callback URL:", callbackUrl);
    console.log("+++++++++++++OAuth 2.0 흐름 적용");
    console.log("+++++++++++++항상 prompt=login 적용");
    console.log("+++++++++++++");

    super({
      clientID: configService.get("KAKAO_API_KEY") as string,
      clientSecret: configService.get("KAKAO_CLIENT_SECRET") || "",
      callbackURL: callbackUrl,
    });
  }

  // 항상 prompt=login을 추가하여 카카오 인증 모달이 뜨도록 함
  authorizationParams() {
    return { prompt: "login" };
  }

  validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: SocialUserProfile) => void,
  ): void {
    try {
      console.log("+++++++++++++카카오 OAuth 콜백 성공!");
      console.log("+++++++++++++Access Token:", accessToken);
      console.log("+++++++++++++Refresh Token:", refreshToken);
      console.log("+++++++++++++Profile ID:", profile.id);

      if (!profile.id) {
        console.error("+++++++++++++카카오 사용자 ID를 가져올 수 없습니다.");
        return done(new Error("카카오 사용자 ID를 가져올 수 없습니다."));
      }

      const kakaoAccount = profile._json?.kakao_account;
      const email = kakaoAccount?.email;
      const emailVerified = kakaoAccount?.is_email_verified;
      const emailValid = kakaoAccount?.is_email_valid;

      const nickname = kakaoAccount?.profile?.nickname || profile.displayName;

      console.log("+++++++++++++이메일 정보:", {
        email,
        verified: emailVerified,
        valid: emailValid,
      });

      const userProfile: SocialUserProfile = {
        provider: "kakao",
        externalId: String(profile.id),
        name: nickname || "카카오사용자",
        email: email && emailVerified && emailValid ? email : undefined,
        _rawData: {
          accessToken,
          refreshToken,
          profileImage: kakaoAccount?.profile?.profile_image_url,
          thumbnailImage: kakaoAccount?.profile?.thumbnail_image_url,
          ageRange: kakaoAccount?.age_range,
          gender: kakaoAccount?.gender,
          kakaoAccount: kakaoAccount,
        },
      };

      console.log("+++++++++++++사용자 프로필 생성 완료:", {
        provider: userProfile.provider,
        externalId: userProfile.externalId,
        name: userProfile.name,
        hasEmail: !!userProfile.email,
      });

      done(null, userProfile);
    } catch (error: any) {
      console.error("+++++++++++++카카오 OAuth 처리 중 오류:", error);
      done(error);
    }
  }
}
