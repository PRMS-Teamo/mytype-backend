import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthService } from "@/apis/auth/auth.service";

@Injectable()
export class BearerTokenGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const rawToken = req.headers["authorization"];
    if (!rawToken) {
      throw new UnauthorizedException("No Token provided - Bearer");
    }
    const token = this.authService.extractTokenFromHeader(rawToken);
    const result = await this.authService.verifyToken(token);

    if (!result || !result.sub) {
      throw new UnauthorizedException("유효하지 않은 토큰입니다.");
    }
    return true;
  }
}

export class AccessTokenGuard extends BearerTokenGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);
    const req = context.switchToHttp().getRequest();
    if (req.type !== "access") {
      throw new UnauthorizedException("AccessToken이 아닙니다")
    }
    return true;
  }
}

export class RefreshTokenGuard extends BearerTokenGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);
    const req = context.switchToHttp().getRequest();
    if (req.type !== "refresh") {
      throw new UnauthorizedException("RefreshToken이 아닙니다")
    }
    return true
  }
}