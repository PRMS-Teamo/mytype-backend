import {
  Controller,
  Get,
  UseGuards,
  Req,
  Res,
  Post,
  Body,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";

import { ApiOkResponse } from "@nestjs/swagger";
import { KakaoCallbackResponseDto } from "./dto/kakao-callback-response.dto";
import { User } from "@/apis/auth/types/auth.interface";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("kakao")
  @UseGuards(AuthGuard("kakao"))
  async redirectToKakao() {}

  @Get("kakao/callback")
  @UseGuards(AuthGuard("kakao"))
  @ApiOkResponse({
    description: "카카오 로그인 성공 응답",
    type: KakaoCallbackResponseDto,
  })
  kakaoCallback(@Req() req: Request, @Res() res: Response) {
    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }
    const user = req.user as User;
    const tokenPayload = {
      kakaoId: user.kakaoId,
      username: user.username,
      displayName: user.displayName,
      userId: user.userId,
    };
    const tokens = this.authService.generateTokens(tokenPayload);

    // 쿠키에 토큰 저장
    res.header("Authorization", `Bearer ${tokens.accessToken}`);
    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // HTTPS에서만 전송
      sameSite: "strict",
      maxAge: 7 * 24 * 3600 * 1000, // 7일 (밀리초)
    });

    const response = {
      ...user,
      tokens,
    };
    const FEURL = "http://localhost:5173";

    return res.send(`
      <script>
          // 이 팝업 창을 연 부모 창이 있는지 확인합니다.
          if (window.opener) {
              // window.opener.postMessage를 사용하여 부모 창으로 데이터를 보냅니다.
              // 첫 번째 인수는 보낼 데이터, 두 번째 인수는 허용되는 부모 창의 Origin(URL)입니다.
              window.opener.postMessage(${JSON.stringify(response)}, '${FEURL}');
              window.close(); // 데이터를 보낸 후 팝업 창을 닫습니다.
          } else {
              // TODO 직접 접근하는 경우로, 실제 배포시엔 제거해야함.
              document.body.innerHTML = '<h1>로그인 정보 수신 완료</h1><pre>' + JSON.stringify(${JSON.stringify(response)}, null, 2) + '</pre><p>이 창을 수동으로 닫아주세요.</p>';
          }
      </script>
    `);
  }

  @Post("refresh")
  refresh(@Req() req, @Res() res: Response) {
    // 쿠키에서 refresh token 읽기
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token not found" });
    }

    // refresh token 검증
    const result = this.authService.verifyToken(refreshToken);
    if (!result || result.type !== "refresh") {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const user = result as User;
    const tokenPayload = {
      kakaoId: user.kakaoId,
      username: user.username,
      displayName: user.displayName,
      userId: user.userId,
    };
    const tokens = this.authService.generateTokens(tokenPayload);

    res.header("Authorization", `Bearer ${tokens.accessToken}`);
    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 3600 * 1000,
    });

    return res.json({ message: "토큰이 갱신되었습니다." });
  }

  @Post("logout")
  logout(@Res() res: Response) {
    // 쿠키에서 토큰 삭제
    res.clearCookie("refreshToken");
    return res.json({ message: "로그아웃되었습니다." });
  }

  @Post("test")
  async test(@Body() user: User, @Res() res: Response) {
    const testUser = await this.authService.createOrGetTestUser(user);

    const tokenPayload = {
      kakaoId: user.kakaoId,
      username: user.username,
      displayName: user.displayName,
      userId: testUser.id,
    };
    const tokens = this.authService.generateTokens(tokenPayload);
    const response = {
      ...user,
      tokens,
    };
    res.header("Authorization", `Bearer ${tokens.accessToken}`);
    return res.json(response);
  }
}
