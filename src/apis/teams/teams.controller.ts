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
import { CreateTeamDto } from "./dto/create-team.dto";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";
import { Request, Response } from "express";
import { AuthenticatedUser } from "@/apis/auth/types/authenticated-user.interface";
import { UpdateTeamDto } from "./dto/update-team.dto";
import { UsersService } from "@/apis/users/users.service";
import {
  TEAM_DIFFERENCE,
  USER_INFO_NULL,
  USER_NOT_OWNER,
} from "@/constants/errorMessage";

@Controller("teams")
export class TeamsController {
  constructor(
    private readonly teamsService: TeamsService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createTeam(
    @Req() req: Request,
    @Body() createTeamDto: CreateTeamDto,
    @Res() res: Response,
  ) {
    const user = req.user as AuthenticatedUser;
    const userId = user.id;
    const userInfoValid = await this.usersService.checkNullInfo(userId);
    if (!userInfoValid) {
      throw new UnauthorizedException({ userInfoNullError: USER_INFO_NULL });
    }
    const userInfo = await this.teamsService.createTeam(userId, createTeamDto);
    return res.status(201).send(userInfo);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  async patchTeam(
    @Param("id") id: string,
    @Body() updateTeamDto: UpdateTeamDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const user = req.user as AuthenticatedUser;
    const userId = user.id;
    const isOwner = await this.usersService.checkOwner(userId);
    if (!isOwner) {
      throw new UnauthorizedException({ USER_NOT_OWNER });
    }
    await this.teamsService.updateTeam(userId, id, updateTeamDto);
    return res.status(201).send({ message: "팀 정보 업데이트 성공" });
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
