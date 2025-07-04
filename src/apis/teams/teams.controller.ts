import { Controller, Post, Body, UseGuards, Req, Res } from "@nestjs/common";
import { TeamsService } from "./teams.service";
import { CreateTeamDto } from "./dto/create-team.dto";
import { AccessTokenGuard } from "@/apis/auth/guard/bearer-token.guard";
import { Request, Response } from "express";
import { User } from "@/apis/auth/types/auth.interface";
import { AuthService } from "@/apis/auth/auth.service";
import { UsersService } from "@/apis/users/users.service";

@Controller("teams")
export class TeamsController {
  constructor(
    private readonly teamsService: TeamsService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @UseGuards(AccessTokenGuard)
  async createTeam(
    @Req() req: Request,
    @Body() createTeamDto: CreateTeamDto,
    @Res() res: Response,
  ) {
    const user = req.user as User;
    const externalId = user.kakaoId;
    const userInfo = await this.usersService.findUserByExternalId(externalId);
    const userId = userInfo.user_id;
    const response = await this.teamsService.createTeam({
      ...createTeamDto,
      user_id: userId,
    });
    return res.status(201).send(response);
  }
}
