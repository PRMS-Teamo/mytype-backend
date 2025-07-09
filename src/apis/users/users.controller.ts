import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Req,
  Res,
  UseGuards,
  Patch,
  Param,
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
  @Get()
  @UseGuards(AccessTokenGuard)
  async getAllUsers(
    @Res() res: Response,
    @Body()
    data: {
      start: number;
      end: number;
    },
  ) {
    const findUsers = await this.usersService.findUsers(data.start, data.end);
    return res.status(200).json(findUsers);
  }

  @Get(":id")
  @UseGuards(AccessTokenGuard)
  @ApiOkResponse({
    description: "아이디로 유저 정보 찾기",
    type: GetMyInfoDto,
  })
  async getUser(
    @Param("id") id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    let userId;
    if (id === "me") {
      const user = req.user as User;
      userId = user.userId;
    } else {
      userId = id;
    }
    const findUser = await this.usersService.findUserByUserId(userId);
    if (!findUser) {
      throw new NotFoundException("Not Found");
    }
    return res.status(200).json(findUser);
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
    console.log("####", userId);
    const findMyInfo = await this.usersService.findUserByUserId(userId);
    if (!findMyInfo) {
      throw new NotFoundException("Not Found");
    }
    return res.status(200).json(findMyInfo);
  }

  @Patch()
  @UseGuards(AccessTokenGuard)
  async updateMyInfo(
    @Req() req: Request,
    @Body() putMyInfo: PutMyInfoDto,
    @Res() res: Response,
  ) {
    const user = req.user as User;
    const userId = user.userId;
    const updatedUser = await this.usersService.updateUserInfoByUserId(
      userId,
      putMyInfo,
    );
    return res.status(201).json(updatedUser);
  }
}
