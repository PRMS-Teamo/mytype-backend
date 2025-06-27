import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-kakao";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

interface KakaoProfile {
  id: string;
  username?: string;
  displayName?: string;
  _json?: {
    id: number;
    connected_at: string;
    properties: {
      nickname?: string;
      profile_image?: string;
      thumbnail_image?: string;
    };
  };
}

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, "kakao") {
  constructor(
    private configService: ConfigService,
  ) {
    super({
      clientID: configService.get("KAKAO_API_KEY") as string,
      callbackURL: `${configService.get("URL")}/auth/kakao/callback`,
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: KakaoProfile,
    done: (error: any, user?: any) => void,
  ) {
    const prisma = new PrismaClient();
    const kakaoId = String(profile.id);
    // 1. external_id에서 카카오 아이디 매칭 확인
    // 2. 사용자 정보 생성 users 등록
    // 3. 해당 테이블에서 id를 가져온다.
    // 4. auth_methods 에 등록되어있는 id를 가져온다.
    // 5. user_auth에 정보를 등록한다.

    const authMethod = "kakao"
    const authMethodData = await prisma.auth_methods.findFirst({
      where: {
        platform: authMethod
      }
    })
    if (!authMethodData) {
      throw Error(`해당 authMethod에 해당하는 데이터가 존재하지 않습니다.`);
    }
    const authMethodId = authMethodData["id"];


    const isExist = await prisma.user_auths.findFirst({
      where: {
        external_id: kakaoId,
      },
    });

    let user;
    if (!isExist) {
      user = {
        kakaoId,
        username: profile.username,
        displayName: profile.displayName,
        status: "NEW"
      }
      const addUser = await prisma.users.create(
        {
          data: {
            name: profile.username as string,
            nickname: profile.displayName as string,
          },
        }
      );
      const userUUID = addUser.id;
      const addUserAuth = await prisma.user_auths.create({
        data: {
          user_id: userUUID,
          auth_id: authMethodId,
          external_id: kakaoId,
        }
      })
    } else {
      user = {
        kakaoId,
        username: profile.username,
        displayName: profile.displayName,
        status: "DONE"
      }
    }

    done(null, user);
  }
}
