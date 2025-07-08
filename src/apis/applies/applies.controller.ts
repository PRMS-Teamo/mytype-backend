import { Controller, Body, Put, UseGuards, Req, Res } from "@nestjs/common";
import { AppliesService } from "./applies.service";
import { UpsertApplyRequestDto } from "./dto/upsert-apply.request.dto";
import { AccessTokenGuard } from "../auth/guard/bearer-token.guard";
import { User } from "@/apis/auth/types/auth.interface";
import { Response, Request } from "express";

@Controller("applies")
export class AppliesController {
  constructor(private readonly appliesService: AppliesService) {}

  @UseGuards(AccessTokenGuard)
  @Put()
  async upsert(
    @Body() upsertApplyRequestDto: UpsertApplyRequestDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const user = req.user as User;
    const userId = user.userId;
    upsertApplyRequestDto.user_id = userId;
    const upsertApply = await this.appliesService.upsert(upsertApplyRequestDto);
    return res
      .status(201)
      .send({ message: "지원이 정상적으로 완료되었습니다." });
  }
}
