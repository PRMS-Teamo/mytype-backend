import { Controller, Get, UseGuards, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { RefreshTokenGuard } from "@/apis/auth/guard/bearer-token.guard";

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
  async kakaoLogin() {}

  @Get("kakao/callback")
  @UseGuards(AuthGuard("kakao"))
  kakaoCallback(@Req() req: Request, @Res() res: Response) {
    console.log("callback", req.user);
    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }
    const result = this.authService.kakaoLogin(req.user as User);
    return res.json(result);
  }

  @Get("refresh_test")
  @UseGuards(RefreshTokenGuard)
  test() {
    return "refresh";
  }
}
