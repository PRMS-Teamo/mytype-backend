import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { KakaoStrategy } from "@/apis/auth/strategies/kakao.strategy";
import { JwtService } from "@nestjs/jwt";
import { PrismaClient as PgClient } from "@/prisma/postgres-client";

@Module({
  providers: [AuthService, KakaoStrategy, JwtService, PgClient],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
