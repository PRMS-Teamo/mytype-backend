import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { TokenPayload, User } from "@/apis/auth/types/auth.interface";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly postgresService: PostgresService,
  ) {}

  generateTokens(user: TokenPayload) {
    const accessToken = this.generateToken(user, true);
    const refreshToken = this.generateToken(user, false);
    const token = {
      accessToken,
      refreshToken,
    };
    return token;
  }

  generateToken(user: TokenPayload, isAccessToken: boolean): string {
    const payload = {
      userId: user.userId,
      kakaoId: user.kakaoId,
      username: user.username,
      displayName: user.displayName,
      type: isAccessToken ? "access" : "refresh",
    };
    const token: string = this.jwtService.sign(payload, {
      secret: this.configService.get("JWT_SECRET"),
      expiresIn: isAccessToken ? 3600 : 7 * 24 * 3600, // access: 1시간, refresh: 7일
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

  async createOrGetTestUser(user: User) {
    const existingUser = await this.postgresService.users.findFirst({
      where: {
        name: user.username,
      },
    });

    if (existingUser) {
      return existingUser;
    }

    const testUser = await this.postgresService.users.create({
      data: {
        name: user.username,
        join_status: false,
      },
    });
    const authMethodId = await this.postgresService.auth_methods.findFirst({
      where: {
        platform: "kakao",
      },
    });
    if (!authMethodId) {
      throw new BadRequestException("카카오 인증 방법 찾을 수 없음");
    }
    const userAuth = await this.postgresService.user_auths.create({
      data: {
        user_id: testUser.id,
        auth_id: authMethodId.id,
        external_id: user.kakaoId,
      },
    });
    if (!userAuth) {
      throw new BadRequestException("테스트 유저 인증 정보 생성 실패");
    }
    return testUser;
  }
}
