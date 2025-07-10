import { Module } from "@nestjs/common";
import { TeamsService } from "./teams.service";
import { TeamsController } from "./teams.controller";
import { AuthModule } from "@/apis/auth/auth.module";
import { UsersModule } from "@/apis/users/users.module";
import { RepositoriesModule } from "@/apis/shared/repositories/repositories.module";
import { UsersService } from "@/apis/users/users.service";

@Module({
  imports: [UsersModule, AuthModule, RepositoriesModule],
  controllers: [TeamsController],
  providers: [TeamsService, UsersService],
  exports: [TeamsService],
})
export class TeamsModule {}
