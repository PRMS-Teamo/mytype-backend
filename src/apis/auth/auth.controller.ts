import { Controller, Get, UseGuards, Req, Res, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import {
  AccessTokenGuard,
  RefreshTokenGuard,
} from "@/apis/auth/guard/bearer-token.guard";
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
  //
  @Post("refresh")
  @UseGuards(RefreshTokenGuard)
  refresh(@Req() req) {
    const user = req.user as User;
    const tokenPayload = {
      kakaoId: user.kakaoId,
      username: user.username,
      displayName: user.displayName,
    };
    const tokens = this.authService.generateTokens(tokenPayload);
    return tokens;
  }

  @Get("test/refresh")
  @UseGuards(RefreshTokenGuard)
  test() {
    return "test! Refresh";
  }

  @Get("test/access")
  @UseGuards(AccessTokenGuard)
  testAccess() {
    return "test! Access";
  }
}
