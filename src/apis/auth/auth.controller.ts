import { Controller, Get, UseGuards, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { RefreshTokenGuard } from "@/apis/auth/guard/bearer-token.guard";
import { ApiOkResponse } from "@nestjs/swagger";
import { KakaoCallbackResponseDto } from "./dto/kakao-callback-response.dto";

interface User {
  id: string;
  username?: string;
  displayName?: string;
}

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
    const tokens = this.authService.generateTokens(req.user as User);
    const response = {
      ...req.user,
      tokens,
    };
    return res.json(response);
  }

  @Get("refresh_test")
  @UseGuards(RefreshTokenGuard)
  test() {
    return "refresh";
  }
}
