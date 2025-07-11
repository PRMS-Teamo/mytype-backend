import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { UsersService } from "@/apis/users/users.service";
import { AuthenticatedUser } from "../types/authenticated-user.interface";

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

  async validate(payload: { userId: string }): Promise<AuthenticatedUser> {
    const user = await this.usersService.findUserByUserId(payload.userId);

    if (!user || !user.id) {
      throw new UnauthorizedException("User not found");
    }

    const authenticatedUser: AuthenticatedUser = {
      id: user.id,
      nickname: user.nickname,
      email: user.email || undefined,
      join_status: user.join_status,
      user_stacks: [],
      advertising: user.advertising,
      position_id: user.position_id || undefined,
      img: user.img || undefined,
      address: user.address || undefined,
      github_id: user.github_id || undefined,
    };

    return authenticatedUser;
  }
}
