import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt, StrategyOptionsWithRequest } from "passport-jwt";
import { Request } from "express";
import { ConfigService } from "@nestjs/config";
import { AuthService } from "../auth.service";
import { SocialUserProfile } from "../types/social-user-profile.interface";

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  "jwt-refresh",
) {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    const jwtSecret = configService.get("JWT_SECRET");
    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not configured");
    }

    const options: StrategyOptionsWithRequest = {
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          return req.cookies?.refreshToken as string;
        },
      ]),
      secretOrKey: jwtSecret,
      passReqToCallback: true,
    };
    super(options);
  }

  async validate(req: Request, payload: any): Promise<SocialUserProfile> {
    if (!payload || !payload.userId || !payload.type) {
      throw new UnauthorizedException("Invalid token payload");
    }

    if (payload.type !== "refresh") {
      throw new UnauthorizedException("Token is not a refresh token");
    }

    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      throw new UnauthorizedException("Refresh token not found in cookies");
    }

    const user = await this.authService.getUserIfRefreshTokenMatches(
      refreshToken,
      payload.userId,
    );

    if (!user) {
      throw new UnauthorizedException(
        "Invalid refresh token or user not found",
      );
    }

    const userProfile: SocialUserProfile = {
      provider: "local",
      externalId: payload.userId,
      name: payload.name || "사용자",
      email: undefined,
      _rawData: {
        userId: payload.userId,
        tokenType: payload.type,
        originalPayload: payload,
        nickname: user.nickname,
        joinStatus: user.join_status,
        userStacks: [],
      },
    };

    return userProfile;
  }
}
