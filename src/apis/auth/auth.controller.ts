import {
  Controller,
  Get,
  UseGuards,
  Res,
  Post,
  Body,
  Param,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { ApiOkResponse } from "@nestjs/swagger";
import { User as UserDecorator } from "./decorators/user.decorator";
import { RefreshTokenGuard } from "./guard/jwt-refresh.guard";
import { JwtAuthGuard } from "./guard/jwt-auth.guard";
import { SocialUserProfile } from "./types/social-user-profile.interface";
import { AuthenticatedUser } from "./types/authenticated-user.interface";
import { DynamicAuthGuard } from "./guard/dynamic-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get(":provider")
  @UseGuards(DynamicAuthGuard)
  redirectToProvider(@Param("provider") provider: string) {
    console.log(
      `이 로그가 출력되면 안 됩니다! Guard가 먼저 처리해야 합니다: 일부러 리턴 줌: ${provider}`,
    );
    return;
  }

  @Get("kakao/test")
  testKakaoLogin(@Res() res: Response) {
    const kakaoApiKey = process.env.KAKAO_API_KEY;
    const redirectUrl = `${process.env.REDIRECT_URL}/auth/kakao/callback`;

    const kakaoAuthUrl =
      "https://kauth.kakao.com/oauth/authorize?" +
      `client_id=${kakaoApiKey}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      "&response_type=code" +
      "&prompt=login";

    console.log(
      "=============테스트용 카카오 로그인 URL:",
      kakaoAuthUrl,
      "==============",
    );

    res.redirect(kakaoAuthUrl);
  }

  @Get(":provider/callback")
  @UseGuards(DynamicAuthGuard)
  @ApiOkResponse({ description: "소셜 로그인 성공" })
  async handleProviderCallback(
    @UserDecorator() userProfile: SocialUserProfile,
    @Res() res: Response,
  ) {
    console.log("+++++++++++++OAuth 콜백 컨트롤러 도달");
    console.log("+++++++++++++User Profile:", {
      provider: userProfile.provider,
      externalId: userProfile.externalId,
      name: userProfile.name,
      hasRawData: !!userProfile._rawData,
    });
    console.log("+++++++++++++");

    try {
      const { tokens, status, user } =
        await this.authService.socialLogin(userProfile);

      console.log("+++++++++++++토큰 생성 성공:", {
        accessTokenLength: tokens.accessToken?.length || 0,
        refreshTokenLength: tokens.refreshToken?.length || 0,
      });
      console.log("+++++++++++++");

      res.cookie("refreshToken", tokens.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
      const redirectUrl = `${frontendUrl}/auth/callback?token=${tokens.accessToken}&success=true`;

      console.log("+++++++++++++Redirecting to frontend:", redirectUrl);
      console.log("+++++++++++++");

      const response = {
        user,
        tokens: {
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        },
        status,
      };

      return res.send(`
        <script>
            if (window.opener) {
                window.opener.postMessage(${JSON.stringify(response)}, '${frontendUrl}');
                window.close();
            } else {
                document.body.innerHTML = '<h1>잘못된 접근으로 로그인을 시도했습니다.</h1>';
            }
        </script>
      `);
    } catch (error) {
      console.error("❌ OAuth 콜백 처리 중 오류:", error);

      const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
      const errorUrl = `${frontendUrl}/auth/callback?error=auth_failed&message=${encodeURIComponent(error.message)}`;

      console.log(
        "+++++++++++++Redirecting to frontend with error:",
        errorUrl,
        "+++++++++++++",
      );
      res.redirect(errorUrl);
    }
  }

  @Post("refresh")
  @UseGuards(RefreshTokenGuard)
  async refresh(
    @UserDecorator() user: AuthenticatedUser,
    @Res() res: Response,
  ) {
    const tokens = this.authService.generateTokens({
      userId: user.id,
      name: user.nickname || "사용자",
    });
    await this.authService.setCurrentRefreshToken(tokens.refreshToken, user.id);

    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.send({ accessToken: tokens.accessToken });
  }

  @Post("logout")
  @UseGuards(JwtAuthGuard)
  async logout(
    @UserDecorator() user: AuthenticatedUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.removeRefreshToken(user.id);
    res.clearCookie("refreshToken");
    return { message: "로그아웃되었습니다." };
  }

  @Post("logout/full")
  @UseGuards(JwtAuthGuard)
  async fullLogout(
    @UserDecorator() user: AuthenticatedUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    console.log("++++++++++++++++++++++++++++++fullLogout", user.id);
    await this.authService.fullLogout(user.id);
    res.clearCookie("refreshToken");
    return { message: "완전히 로그아웃되었습니다." };
  }

  @Post("unlink")
  @UseGuards(JwtAuthGuard)
  async unlinkAccount(
    @UserDecorator() user: AuthenticatedUser,
    @Body("kakaoAccessToken") kakaoAccessToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.unlinkFromKakao(kakaoAccessToken);

    await this.authService.removeRefreshToken(user.id);
    res.clearCookie("refreshToken");

    return { message: "계정 연결이 해제되었습니다." };
  }

  @Get("scopes")
  @UseGuards(JwtAuthGuard)
  async checkScopes(
    @Body("kakaoAccessToken") kakaoAccessToken: string,
    @Body("scopes") scopes?: string[],
  ) {
    const scopeInfo = await this.authService.checkKakaoScopes(
      kakaoAccessToken,
      scopes,
    );
    return { scopes: scopeInfo };
  }

  @Post("validate-token")
  @UseGuards(JwtAuthGuard)
  async validateKakaoToken(
    @Body("kakaoAccessToken") kakaoAccessToken: string,
    @Body("kakaoRefreshToken") kakaoRefreshToken?: string,
  ) {
    try {
      const tokenInfo =
        await this.authService.validateKakaoToken(kakaoAccessToken);
      return {
        valid: true,
        tokenInfo,
        message: "토큰이 유효합니다.",
      };
    } catch {
      if (kakaoRefreshToken) {
        try {
          const newTokens =
            await this.authService.refreshKakaoToken(kakaoRefreshToken);
          return {
            valid: false,
            refreshed: true,
            newTokens,
            message: "토큰이 갱신되었습니다.",
          };
        } catch {
          return {
            valid: false,
            refreshed: false,
            message: "토큰 갱신에 실패했습니다. 다시 로그인해주세요.",
          };
        }
      } else {
        return {
          valid: false,
          message: "토큰이 유효하지 않습니다.",
        };
      }
    }
  }

  @Post("test")
  async test(@Body() userProfile: SocialUserProfile, @Res() res: Response) {
    const testUser = await this.authService.createOrGetTestUser(userProfile);

    const tokenPayload = {
      userId: testUser.id,
      name: testUser.name || "사용자",
    };
    const tokens = this.authService.generateTokens(tokenPayload);

    await this.authService.setCurrentRefreshToken(
      tokens.refreshToken,
      testUser.id,
    );

    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.header("Authorization", `Bearer ${tokens.accessToken}`);

    return res.json({
      user: testUser,
      tokens: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },
    });
  }
}
