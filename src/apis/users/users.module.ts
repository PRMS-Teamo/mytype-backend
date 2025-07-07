import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { AuthModule } from "@/apis/auth/auth.module";
import { PostgresService } from "@/prisma/postgres/postgres.service";

@Module({
  imports: [AuthModule],
  controllers: [UsersController],
  providers: [UsersService, PostgresService],
})
export class UsersModule {}
