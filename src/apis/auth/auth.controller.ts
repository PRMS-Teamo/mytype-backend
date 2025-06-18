import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Req,
  Res,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import {AccessTokenGuard, BearerTokenGuard, RefreshTokenGuard} from "@/apis/auth/guard/bearer-token.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get("kakao")
  @UseGuards(AuthGuard("kakao"))
  async kakaoLogin() {}

  @Get("kakao/callback")
  @UseGuards(AuthGuard("kakao"))
  async kakaoCallback(@Req() req: Request, @Res() res: Response) {
    console.log("callback", req.user);
    const result = await this.authService.kakaoLogin(req.user);
    return res.json(result);
  }

  @Get("refresh_test")
  @UseGuards(RefreshTokenGuard)
  test() {
    return "refresh";
  }
}
