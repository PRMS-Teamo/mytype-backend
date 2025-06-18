import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { KakaoStrategy } from "@/apis/auth/strategies/kakao.strategy";
import { JwtService } from "@nestjs/jwt";

@Module({
  providers: [AuthService, KakaoStrategy, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
