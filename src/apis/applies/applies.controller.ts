import { Controller, Body, Put } from "@nestjs/common";
import { AppliesService } from "./applies.service";
import { UpsertApplyRequestDto } from "./dto/upsert-apply.request.dto";

@Controller("applies")
export class AppliesController {
  constructor(private readonly appliesService: AppliesService) {}

  @Put()
  upsert(@Body() upsertApplyRequestDto: UpsertApplyRequestDto) {
    return this.appliesService.upsert(upsertApplyRequestDto);
  }
}
