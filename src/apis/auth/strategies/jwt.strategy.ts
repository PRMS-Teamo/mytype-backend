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
      join_status: user.isJoined || false,
      user_stacks:
        user.userStacks?.map((stack) => ({
          stack_id: stack.stackId || undefined,
          stack_name: stack.stackName || undefined,
          img_url: stack.imgUrl || undefined,
        })) || [],
      is_public: user.isPublic || false,
      position_id: user.positionId || undefined,
      img_url: user.profileImage || undefined,
      address: user.location || undefined,
      github_id: user.github || undefined,
      img_id: user.imgId || undefined,
      name: user.name || undefined,
      description: user.description || undefined,
      proceed_type: user.proceedType || undefined,
    } as AuthenticatedUser;

    return authenticatedUser;
  }
}
