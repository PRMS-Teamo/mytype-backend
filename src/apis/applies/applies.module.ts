import { Module } from "@nestjs/common";
import { AppliesService } from "./applies.service";
import { AppliesController } from "./applies.controller";
import { AuthModule } from "@/apis/auth/auth.module";
import { TeamsService } from "@/apis/teams/teams.service";
import { UsersModule } from "@/apis/users/users.module";
import { TeamsModule } from "@/apis/teams/teams.module";

@Module({
  imports: [AuthModule, UsersModule, TeamsModule],
  controllers: [AppliesController],
  providers: [AppliesService, TeamsService],
})
export class AppliesModule {}
