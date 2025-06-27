import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

interface User {
  id: string;
  username?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  generateTokens(user: User) {
    const accessToken = this.generateToken(user, true);
    const refreshToken = this.generateToken(user, false);
    const token = {
      accessToken,
      refreshToken,
    };
    return token;
  }

  generateToken(user: User, isAccessToken: boolean): string {
    const payload = {
      sub: user.id,
      nickname: user.username || user.displayName,
      type: isAccessToken ? "access" : "refresh",
    };
    const token: string = this.jwtService.sign(payload, {
      secret: this.configService.get("JWT_SECRET"),
      expiresIn: isAccessToken ? 300 : 3600,
    });
    return token;
  }

  extractTokenFromHeader(header: string) {
    const splitToken = header.split(" ");
    if (splitToken.length !== 2 || splitToken[0] !== "Bearer") {
      throw new UnauthorizedException("Wrong Token");
    }
    const token = splitToken[1];
    return token;
  }

  verifyToken(token: string): any {
    console.log("input token value", token);
    try {
      const result: any = this.jwtService.verify(token, {
        secret: this.configService.get("JWT_SECRET"),
      });
      return result;
    } catch (error) {
      throw new UnauthorizedException("만료되거나 잘못된 토큰입니다.", {
        cause: error,
      });
    }
  }
}
