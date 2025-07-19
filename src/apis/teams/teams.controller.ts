import {
  Controller,
  Post,
  Body,
  UseGuards,
  Param,
  Patch,
  Get,
  Delete,
  Res,
} from "@nestjs/common";
import { TeamsService } from "./teams.service";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";
import { AuthenticatedUser } from "@/apis/auth/types/authenticated-user.interface";
import { User } from "@/apis/auth/decorators/user.decorator";
import { UnifiedTeamDto } from "./dto/unified-team.dto";
import { ApiOkResponse } from "@nestjs/swagger";
import { Response } from "express";
import {
  Pagination,
  PaginationMeta,
} from "../shared/decorator/pagination.decorator";

@Controller("teams")
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createTeam(
    @Body() teamDto: UnifiedTeamDto,
    @User() user: AuthenticatedUser,
  ): Promise<UnifiedTeamDto> {
    const userId = user.id;
    return this.teamsService.createTeam(userId, teamDto);
  }

  @Get()
  async getTeams(@Pagination({ optional: true }) pagination: PaginationMeta) {
    if (pagination.enabled) {
      return this.teamsService.getTeams(pagination.skip, pagination.take);
    } else {
      return this.teamsService.getTeams(); // 페이지네이션 없이 모든 데이터
    }
  }

  @Get("me")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UnifiedTeamDto })
  async getMyTeam(@User() user: AuthenticatedUser): Promise<UnifiedTeamDto> {
    const userId = user.id;
    return this.teamsService.getTeamByUserId(userId);
  }

  @Get(":teamId")
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UnifiedTeamDto })
  async getTeam(@Param("teamId") teamId: string): Promise<UnifiedTeamDto> {
    return this.teamsService.getTeam(teamId);
  }

  @Patch("me")
  @UseGuards(JwtAuthGuard)
  async patchTeam(
    @User() user: AuthenticatedUser,
    @Body() updateTeamDto: UnifiedTeamDto,
  ): Promise<UnifiedTeamDto> {
    const userId = user.id;
    console.log("===================patchTeam===================");
    console.log("userId", userId);
    console.log("updateTeamDto", updateTeamDto);
    return this.teamsService.patchTeam(userId, updateTeamDto);
  }

  @Patch("complete")
  @UseGuards(JwtAuthGuard)
  async finishTeam(@User() user: AuthenticatedUser) {
    const userId = user.id;
    return this.teamsService.finishTeam(userId);
  }

  @Get("me/members")
  @UseGuards(JwtAuthGuard)
  async getMembers(@User() user: AuthenticatedUser) {
    const userId = user.id;
    console.log("===================getMembers===================");
    console.log("userId", userId);
    return this.teamsService.getTeamMembers(userId);
  }

  @Delete("me/members/:memberId")
  @UseGuards(JwtAuthGuard)
  async removeMembers(
    @Res() res: Response,
    @User() user: AuthenticatedUser,
    @Param("memberId") memberId: string,
  ) {
    const userId = user.id;
    const deleteMember = await this.teamsService.deleteTeamMember(
      userId,
      memberId,
    );
    return res.status(200).send(deleteMember);
  }

  @Post("members/:memberId/off-board/:teamId")
  @UseGuards(JwtAuthGuard)
  async offBoard(
    @User() user: AuthenticatedUser,
    @Param("memberId") memberId: string,
    @Param("teamId") teamId: string,
  ) {
    const userId = user.id;
    return this.teamsService.offBoard(userId, memberId, teamId);
  }
}
