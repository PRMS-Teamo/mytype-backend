import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { SocialUserProfile } from "./types/social-user-profile.interface";
import axios from "axios";

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly postgresService: PostgresService,
    private readonly usersService: UsersService,
  ) {}

  // 카카오 Access Token 유효성 검증
  async validateKakaoToken(accessToken: string): Promise<any> {
    try {
      const response = await axios.get(
        "https://kapi.kakao.com/v1/user/access_token_info",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        throw new UnauthorizedException(
          "카카오 토큰이 만료되었거나 유효하지 않습니다.",
        );
      }
      throw new BadRequestException("카카오 토큰 검증 중 오류가 발생했습니다.");
    }
  }

  // 카카오 토큰 갱신
  async refreshKakaoToken(
    refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken?: string }> {
    try {
      const response = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        {
          grant_type: "refresh_token",
          client_id: this.configService.get("KAKAO_API_KEY"),
          refresh_token: refreshToken,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );

      return {
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token || refreshToken,
      };
    } catch (error) {
      if (error.response?.status === 400) {
        throw new UnauthorizedException(
          "리프레시 토큰이 유효하지 않습니다. 다시 로그인해주세요.",
        );
      }
      throw new BadRequestException("토큰 갱신 중 오류가 발생했습니다.");
    }
  }

  // 카카오 사용자 정보 조회 (토큰 자동 갱신 포함)
  async getKakaoUserInfo(
    accessToken: string,
    refreshToken?: string,
  ): Promise<any> {
    try {
      const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response?.status === 401 && refreshToken) {
        const newTokens = await this.refreshKakaoToken(refreshToken);
        const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
          headers: {
            Authorization: `Bearer ${newTokens.accessToken}`,
          },
        });
        return {
          ...response.data,
          _newTokens: newTokens,
        };
      }
      throw new UnauthorizedException(
        "카카오 사용자 정보를 가져올 수 없습니다.",
      );
    }
  }

  async setCurrentRefreshToken(refreshToken: string, userId: string) {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.postgresService.users.update({
      where: { id: userId },
      data: { hashed_refresh_token: hashedRefreshToken as any },
    });
  }

  async getUserIfRefreshTokenMatches(refreshToken: string, userId: string) {
    const user = await this.usersService.findUserByUserId(userId);
    const storedHashedToken = (user as any)?.hashed_refresh_token;
    if (!user || !storedHashedToken) return null;

    const isMatch = await bcrypt.compare(refreshToken, storedHashedToken);

    if (isMatch) {
      return user;
    }
    return null;
  }

  async removeRefreshToken(userId: string) {
    return this.postgresService.users.update({
      where: { id: userId },
      data: {
        hashed_refresh_token: null as any,
      },
    });
  }

  async socialLogin(userProfile: {
    provider: string;
    externalId: string;
    name: string;
    email?: string;
  }) {
    const userAuth = await this.postgresService.user_auths.findFirst({
      where: { external_id: userProfile.externalId },
      include: { users: true },
    });

    let user;
    if (userAuth) {
      user = userAuth.users;
    } else {
      user = await this.createNewUserFromSocialProfile(userProfile);
    }

    const tokens = this.generateTokens({
      userId: user.id,
      name: user.name,
    });
    await this.setCurrentRefreshToken(tokens.refreshToken, user.id);

    return tokens;
  }

  private async createNewUserFromSocialProfile(userProfile: {
    provider: string;
    externalId: string;
    name: string;
    email?: string;
  }) {
    return this.postgresService.$transaction(async (tx: PostgresService) => {
      const authMethod = await tx.auth_methods.findFirst({
        where: { provider: userProfile.provider },
      });
      if (!authMethod) {
        throw new BadRequestException(
          `${userProfile.provider} auth method not found.`,
        );
      }

      const newUser = await tx.users.create({
        data: {
          name: userProfile.name,
          nickname: userProfile.name,
          join_status: false,
        },
      });

      await tx.user_auths.create({
        data: {
          user_id: newUser.id,
          auth_id: authMethod.id,
          external_id: userProfile.externalId,
        },
      });

      return newUser;
    });
  }

  generateTokens(user: { userId: string; name: string }) {
    const accessToken = this.generateToken(user, true);
    const refreshToken = this.generateToken(user, false);
    const token = {
      accessToken,
      refreshToken,
    };
    return token;
  }

  generateToken(
    user: { userId: string; name: string },
    isAccessToken: boolean,
  ): string {
    const payload = {
      userId: user.userId,
      name: user.name,
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

  async createOrGetTestUser(userProfile: SocialUserProfile) {
    const existingUser = await this.postgresService.users.findFirst({
      where: {
        name: userProfile.name,
      },
    });

    if (existingUser) {
      return existingUser;
    }

    const testUser = await this.postgresService.users.create({
      data: {
        name: userProfile.name,
        join_status: false,
      },
    });
    const authMethodId = await this.postgresService.auth_methods.findFirst({
      where: {
        provider: "kakao",
      },
    });
    if (!authMethodId) {
      throw new BadRequestException("카카오 인증 방법 찾을 수 없음");
    }
    const userAuth = await this.postgresService.user_auths.create({
      data: {
        user_id: testUser.id,
        auth_id: authMethodId.id,
        external_id: userProfile.externalId,
      },
    });
    if (!userAuth) {
      throw new BadRequestException("테스트 유저 인증 정보 생성 실패");
    }

    return testUser;
  }

  // 카카오 로그아웃 (카카오 서버에서 토큰 무효화)
  async logoutFromKakao(accessToken: string): Promise<void> {
    try {
      await axios.post(
        "https://kapi.kakao.com/v1/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
    } catch (error) {
      // 로그아웃 실패해도 로컬에서는 토큰을 제거하도록 함
      console.error(
        "카카오 로그아웃 중 오류:",
        error.response?.data || error.message,
      );
    }
  }

  // 카카오 연결 끊기 (회원 탈퇴)
  async unlinkFromKakao(accessToken: string): Promise<void> {
    try {
      await axios.post(
        "https://kapi.kakao.com/v1/user/unlink",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
    } catch (error: any) {
      throw new BadRequestException(
        `카카오 연결 끊기에 실패했습니다: ${error.response?.data?.msg || error.message}`,
      );
    }
  }

  // 카카오 동의 항목 확인
  async checkKakaoScopes(accessToken: string, scopes?: string[]): Promise<any> {
    try {
      const params = new URLSearchParams();
      if (scopes && scopes.length > 0) {
        params.append("scopes", JSON.stringify(scopes));
      }

      const response = await axios.get(
        "https://kapi.kakao.com/v2/user/scopes",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params,
        },
      );
      return response.data;
    } catch (error: any) {
      throw new BadRequestException(
        `동의 항목 확인 중 오류가 발생했습니다: ${error.response?.data?.msg || error.message}`,
      );
    }
  }

  // 전체 로그아웃 (로컬 + 카카오)
  async fullLogout(accessToken: string, userId: string): Promise<void> {
    // 1. 카카오 서버에서 로그아웃
    await this.logoutFromKakao(accessToken);

    // 2. 로컬 refresh token 제거
    await this.removeRefreshToken(userId);
  }
}
