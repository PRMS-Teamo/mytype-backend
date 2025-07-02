import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { KakaoStrategy } from "@/apis/auth/strategies/kakao.strategy";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "@/databases/prisma/prisma.service";

@Module({
  providers: [AuthService, KakaoStrategy, JwtService, PrismaService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
