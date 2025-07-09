import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Res,
  Param,
  Patch,
} from "@nestjs/common";
import { TeamsService } from "./teams.service";
import { CreateTeamDto } from "./dto/create-team.dto";
import { AccessTokenGuard } from "@/apis/auth/guard/bearer-token.guard";
import { Request, Response } from "express";
import { User } from "@/apis/auth/types/auth.interface";
import { UpdateTeamDto } from "./dto/update-team.dto";


@Controller("teams")
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  @UseGuards(AccessTokenGuard)
  async createTeam(
    @Req() req: Request,
    @Body() createTeamDto: CreateTeamDto,
    @Res() res: Response,
  ) {
    const user = req.user as User;
    const userId = user.userId;
    const userInfo = await this.teamsService.createTeam(userId, createTeamDto);
    return res.status(201).send(userInfo);
  }

  @Patch(":id")
  @UseGuards(AccessTokenGuard)
  async patchTeam(
    @Param("id") id: string,
    @Body() updateTeamDto: UpdateTeamDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const user = req.user as User;
    await this.teamsService.updateTeam(user.userId, id, updateTeamDto);
    return res.status(201).send({ message: "팀 정보 업데이트 성공" });
  }

  @Patch(":id")
  @UseGuards(AccessTokenGuard)
  async patchTeam(
    @Param("id") id: string,
    @Body() updateTeamDto: UpdateTeamDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const user = req.user as User;
    await this.teamsService.updateTeam(user.userId, id, updateTeamDto);
    return res.status(201).send({ message: "팀 정보 업데이트 성공" });
  }
}
