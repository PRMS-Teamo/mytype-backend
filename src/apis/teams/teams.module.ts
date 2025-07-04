import { Module } from "@nestjs/common";
import { TeamsService } from "./teams.service";
import { TeamsController } from "./teams.controller";
import { AuthModule } from "@/apis/auth/auth.module";
import { PrismaService } from "@/databases/prisma/prisma.service";
import { UsersModule } from "@/apis/users/users.module";
import { UsersService } from "@/apis/users/users.service";
import { StacksRepository } from "@/repositories/stacks.repository";
import { PositionRepository } from "@/repositories/position.repository";

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [TeamsController],
  providers: [
    TeamsService,
    PrismaService,
    UsersService,
    StacksRepository,
    PositionRepository,
  ],
})
export class TeamsModule {}
