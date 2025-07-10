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
    if (req.headers.referer === undefined) {
      return res.status(403).json({ message: "잘못된 접근" });
    }
    const user = req.user as User;
    const tokenPayload = {
      kakaoId: user.kakaoId,
      username: user.username,
      displayName: user.displayName,
      userId: user.userId,
    };
    const tokens = this.authService.generateTokens(tokenPayload);

    const response = {
      ...user,
      tokens,
    };
    const FEURL = "http://localhost:5173";
    return res.send(`
      <script>
          // 이 팝업 창을 연 부모 창이 있는지 확인합니다.
          if (window.opener) {
              window.opener.postMessage(${JSON.stringify(response)}, '${FEURL}');
              window.close();
          } else {
              document.body.innerHTML = '<h1>잘못된 접근으로 로그인을 시도했습니다.</h1>';
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
