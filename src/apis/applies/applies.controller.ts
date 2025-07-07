import { Controller, Body, Put, UseGuards, Request } from "@nestjs/common";
import { AppliesService } from "./applies.service";
import { UpsertApplyRequestDto } from "./dto/upsert-apply.request.dto";
import { AccessTokenGuard } from "../auth/guard/bearer-token.guard";

@Controller("applies")
export class AppliesController {
  constructor(private readonly appliesService: AppliesService) {}

  @UseGuards(AccessTokenGuard)
  @Put("apply")
  upsert(
    @Body() upsertApplyRequestDto: UpsertApplyRequestDto,
    @Request() req: any,
  ) {
    upsertApplyRequestDto.user_id = req.user_id;
    return this.appliesService.upsert(upsertApplyRequestDto);
  }
}
