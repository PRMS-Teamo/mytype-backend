import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Res,
  Param,
  Patch,
  UnauthorizedException,
  Get,
  Delete,
} from "@nestjs/common";
import { TeamsService } from "./teams.service";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";
import { Request, Response } from "express";
import { AuthenticatedUser } from "@/apis/auth/types/authenticated-user.interface";
import { UsersService } from "@/apis/users/users.service";
import { TEAM_DIFFERENCE, USER_NOT_OWNER } from "@/constants/errorMessage";
import { Team } from "./entities/team.entity";
import { User } from "../auth/decorators/user.decorator";
import { GetTeamResDto } from "./dto/get.team.res.dto";
import { User as UserDecorator } from "@/apis/auth/decorators/user.decorator";

@Controller("teams")
export class TeamsController {
  constructor(
    private readonly teamsService: TeamsService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createTeam(
    @Body() team: Team,
    @User() user: AuthenticatedUser,
    @Res() res: Response,
  ) {
    const userId = user.id;
    const createdTeam = await this.teamsService.createTeam(userId, team);
    return res.status(201).send(createdTeam);
  }

  @Get()
  async getTeams(@Res() res: Response) {
    const teams = await this.teamsService.getTeams();
    return res.status(200).send(teams);
  }

  @Get(":teamId")
  @UseGuards(JwtAuthGuard)
  async getTeam(@Param("teamId") teamId: string, @Res() res: Response) {
    const team = await this.teamsService.getTeam(teamId);
    return res.status(200).json(team);
  }

  @Patch(":teamId")
  @UseGuards(JwtAuthGuard)
  async patchTeam(
    @Param("teamId") teamId: string,
    @UserDecorator() user: AuthenticatedUser,
    @Body() updateTeamDto: GetTeamResDto,
    @Res() res: Response,
  ) {
    const userId = user.id;
    const isOwner = await this.usersService.checkOwner(userId);
    if (!isOwner) {
      throw new UnauthorizedException({ USER_NOT_OWNER });
    }
    const updatedTeam = await this.teamsService.patchTeam(
      userId,
      teamId,
      updateTeamDto,
    );
    return res.status(201).send(updatedTeam);
  }

  @Get(":teamId/members")
  @UseGuards(JwtAuthGuard)
  async getMembers(
    @Req() req: Request,
    @Res() res: Response,
    @Param("teamId") teamId: string,
  ) {
    const teamMembers = await this.teamsService.getTeamMembers(teamId);
    return res.status(200).send(teamMembers);
  }

  @Delete(":teamId/members/:memberId")
  @UseGuards(JwtAuthGuard)
  async removeMembers(
    @Req() req: Request,
    @Res() res: Response,
    @Param("teamId") teamId: string,
    @Param("memberId") memberId: string,
  ) {
    const user = req.user as AuthenticatedUser;
    const userId = user.id;
    // 예외1. 해당 팀의 오너인가
    const teamOwnerId = await this.teamsService.getTeamOwnerIdByTeamId(teamId);
    if (teamOwnerId !== userId) {
      throw new UnauthorizedException({ USER_NOT_OWNER });
    }
    // 예외2. 해당 유저가 해당 팀 소속인가.
    const userTeamId = await this.teamsService.getTeamIdByUserId(userId);
    if (userTeamId !== teamId) {
      throw new UnauthorizedException({ TEAM_DIFFERENCE });
    }
    const deleteMember = await this.teamsService.deleteTeamMember(memberId);
    return deleteMember;
  }
}
