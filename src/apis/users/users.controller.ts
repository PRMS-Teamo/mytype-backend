import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Res,
  UseGuards,
  Patch,
  Param,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";
import { Response } from "express";
import { ApiOkResponse } from "@nestjs/swagger";
import { GetMyInfoDto, PutMyInfoDto } from "@/apis/users/dto/my-info.dto";
import { AuthenticatedUser } from "@/apis/auth/types/authenticated-user.interface";
import { User as UserDecorator } from "@/apis/auth/decorators/user.decorator";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: "아이디로 유저 정보 찾기",
    type: GetMyInfoDto,
  })
  async getUser(
    @Param("id") id: string,
    @UserDecorator() user: AuthenticatedUser,
    @Res() res: Response,
  ) {
    let userId;
    if (id === "me") {
      userId = user.id; // 이제 직접 id에 접근 가능!
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
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: "나의 정보 불러오기",
    type: GetMyInfoDto,
  })
  async getMyInfo(
    @UserDecorator() user: AuthenticatedUser,
    @Res() res: Response,
  ) {
    const userId = user.id; // 이제 직접 id에 접근 가능!
    console.log("+++++++++++++사용자 ID 조회:", userId);
    console.log("+++++++++++++");
    const findMyInfo = await this.usersService.findUserByUserId(userId);
    if (!findMyInfo) {
      throw new NotFoundException("Not Found");
    }
    return res.status(200).json(findMyInfo);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async updateMyInfo(
    @UserDecorator() user: AuthenticatedUser,
    @Body() putMyInfo: PutMyInfoDto,
    @Res() res: Response,
  ) {
    const userId = user.id; // 이제 직접 id에 접근 가능!
    const updatedUser = await this.usersService.updateUserInfoByUserId(
      userId,
      putMyInfo,
    );
    return res.status(201).json(updatedUser);
  }
}
