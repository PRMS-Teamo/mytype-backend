import { Module } from "@nestjs/common";
import { TeamsService } from "./teams.service";
import { TeamsController } from "./teams.controller";
import { AuthModule } from "@/apis/auth/auth.module";
import { PrismaService } from "@/databases/prisma/prisma.service";
import { UsersModule } from "@/apis/users/users.module";
import { UsersService } from "@/apis/users/users.service";

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [TeamsController],
  providers: [TeamsService, PrismaService, UsersService],
})
export class TeamsModule {}
