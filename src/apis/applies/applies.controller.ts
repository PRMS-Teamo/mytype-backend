import { Controller, Body, Put, UseGuards, Request } from "@nestjs/common";
import { AppliesService } from "./applies.service";
import { UpsertApplyRequestDto } from "./dto/upsert-apply.request.dto";
import { AccessTokenGuard } from "../auth/guard/bearer-token.guard";
import { User } from "@/apis/auth/types/auth.interface";

@Controller("applies")
export class AppliesController {
  constructor(private readonly appliesService: AppliesService) {}

  @UseGuards(AccessTokenGuard)
  @Put()
  upsert(
    @Body() upsertApplyRequestDto: UpsertApplyRequestDto,
    @Request() req: any,
  ) {
    const user = req.user as User;
    const userId = user.userId;
    upsertApplyRequestDto.user_id = userId;
    return this.appliesService.upsert(upsertApplyRequestDto);
  }
}
