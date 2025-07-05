import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { AuthModule } from "@/apis/auth/auth.module";
import { PrismaClient as PgClient } from "@/prisma/postgres-client";

@Module({
  imports: [AuthModule],
  controllers: [UsersController],
  providers: [UsersService, PgClient],
})
export class UsersModule {}
