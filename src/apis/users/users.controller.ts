import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Put,
  Req,
  Res,
  UseGuards,
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
  @ApiOkResponse({
    description: "내 정보 찾기 응답 성공",
    type: GetMyInfoDto,
  })
  async getUser(@Req() req: Request, @Res() res: Response) {
    const user = req.user as User;
    const externalId = user.kakaoId; //TODO : 나중에 kakaoId가 아닌 그냥 Id로 로직 변경하는게 좋음
    const findUser = await this.usersService.findUserByExternalId(externalId);
    if (!findUser || !findUser.users) {
      throw new NotFoundException("Not Found");
    }
    return res.status(200).json(findUser.users);
  }

  @Put()
  @UseGuards(AccessTokenGuard)
  async pdateMyInfo(@Req() req: Request, @Body() putMyInfo: PutMyInfoDto, @Res() res: Response) {
    const user = req.user as User;
    const externalId = user.kakaoId;
    const updatedUser = await this.usersService.updateUserInfoByExternalId(
      externalId,
      putMyInfo,
    );
    return res.status(200).json(updatedUser);
  }
}
