import { Controller, UseGuards, Patch, Param } from "@nestjs/common";
import { BumpsService } from "./bumps.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guard/jwt-auth.guard";
import { User as UserDecorator } from "@/apis/auth/decorators/user.decorator";
import { AuthenticatedUser } from "@/apis/auth/types/authenticated-user.interface";

@Controller("bumps")
export class BumpsController {
  constructor(private readonly bumpsService: BumpsService) {}

  @Patch()
  @ApiOperation({ summary: "Bump 생성 또는 업데이트" })
  @ApiResponse({
    status: 200,
    description: "Bump 생성 또는 업데이트 성공",
  })
  @UseGuards(JwtAuthGuard)
  upsertBump(@UserDecorator() authenticatedUser: AuthenticatedUser) {
    return this.bumpsService.upsertUserBump(authenticatedUser.id);
  }

  @Patch(":teamId")
  @ApiOperation({ summary: "팀 Bump 생성 또는 업데이트" })
  @ApiResponse({
    status: 200,
    description: "팀 Bump 생성 또는 업데이트 성공",
  })
  @UseGuards(JwtAuthGuard)
  upsertTeamBump(@Param("teamId") teamId: string) {
    return this.bumpsService.upsertTeamBump(teamId);
  }
}
