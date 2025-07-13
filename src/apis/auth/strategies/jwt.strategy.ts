import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { UsersService } from "@/apis/users/users.service";
import { AuthenticatedUser } from "../types/authenticated-user.interface";
import { Request } from "express";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get("JWT_SECRET") as string,
    });
  }

  async validate(
    payload: { userId: string },
    req: Request,
  ): Promise<AuthenticatedUser> {
    console.log(req.cookies);
    const user = await this.usersService.findUserByUserId(payload.userId);
    if (!user || !user.id) {
      throw new UnauthorizedException({
        message: "User not found",
        userId: payload.userId,
        refreshToken: req.cookies?.refreshToken,
        error: "Unauthorized",
      });
    }

    const authenticatedUser: AuthenticatedUser = {
      id: user.id,
      nickname: user.nickname,
      email: user.email || undefined,
      join_status: user.join_status,
      user_stacks: user.user_stacks?.map((stack) => ({
        stack_id: stack.stack_id,
      })),
      is_public: user.is_public || false,
      position_id: user.position_id || undefined,
      img_url: user.img_url || undefined,
      address: user.address || undefined,
      github_id: user.github_id || undefined,
      description: user.description || undefined, // 추가된 필드
      proceed_type: user.proceed_type || undefined, // 추가된 필드
    };

    return authenticatedUser;
  }
}
