import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthService } from "@/apis/auth/auth.service";

@Injectable()
export class CookieTokenGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const cookies = req.cookies;

    if (!cookies || !cookies.accessToken) {
      throw new UnauthorizedException("쿠키에 토큰이 없습니다.");
    }

    const token = cookies.accessToken;
    const result = await this.authService.verifyToken(token);

    if (!result) {
      throw new UnauthorizedException("유효하지 않은 토큰입니다.");
    }

    req.user = result;
    return true;
  }
}

export class CookieAccessTokenGuard extends CookieTokenGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);
    const req = context.switchToHttp().getRequest();
    if (req.user.type !== "access") {
      throw new UnauthorizedException("AccessToken이 아닙니다");
    }
    return true;
  }
}

export class CookieRefreshTokenGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const cookies = req.cookies;

    if (!cookies || !cookies.refreshToken) {
      throw new UnauthorizedException("쿠키에 리프레시 토큰이 없습니다.");
    }

    const token = cookies.refreshToken;
    const result = await this.authService.verifyToken(token);

    if (!result) {
      throw new UnauthorizedException("유효하지 않은 리프레시 토큰입니다.");
    }

    if (result.type !== "refresh") {
      throw new UnauthorizedException("RefreshToken이 아닙니다");
    }

    req.user = result;
    return true;
  }
}
