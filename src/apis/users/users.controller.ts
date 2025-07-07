import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Put,
  Req,
  Res,
  UseGuards,
  Query,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { AccessTokenGuard } from "@/apis/auth/guard/bearer-token.guard";
import { Request, Response } from "express";
import { User } from "@/apis/auth/types/auth.interface";
import { ApiOkResponse } from "@nestjs/swagger";
import { GetMyInfoDto, PutMyInfoDto } from "@/apis/users/dto/my-info.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // id로 정보 찾기
  @Get()
  @UseGuards(AccessTokenGuard)
  @ApiOkResponse({
    description: "아이디로 유저 정보 찾기",
    type: GetMyInfoDto,
  })
  async getUser(
    @Query("id") id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const findUser = await this.usersService.findUserByUserId(id);
    if (!findUser || !findUser["users"]) {
      throw new NotFoundException("Not Found");
    }
    return res.status(200).json(findUser["users"]);
  }

  @Get("/me")
  @UseGuards(AccessTokenGuard)
  @ApiOkResponse({
    description: "나의 정보 불러오기",
    type: GetMyInfoDto,
  })
  async getMyInfo(@Req() req: Request, @Res() res: Response) {
    const user = req.user as User;
    const userId = user.userId;
    const findMyInfo = await this.usersService.findUserByUserId(userId);
    if (!findMyInfo || !findMyInfo["users"]) {
      throw new NotFoundException("Not Found");
    }
    return res.status(200).json(findMyInfo["users"]);
  }

  @Put()
  @UseGuards(AccessTokenGuard)
  async updateMyInfo(
    @Req() req: Request,
    @Body() putMyInfo: PutMyInfoDto,
    @Res() res: Response,
  ) {
    const user = req.user as User;
    const externalId = user.kakaoId;
    const updatedUser = await this.usersService.updateUserInfoByExternalId(
      externalId,
      putMyInfo,
    );
    return res.status(200).json(updatedUser);
  }
}
