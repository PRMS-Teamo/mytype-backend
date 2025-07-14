import { Controller, Get, UseGuards } from "@nestjs/common";
import { ImagesService } from "./images.service";
import { JwtAuthGuard } from "@/apis/auth/guard/jwt-auth.guard";
import { ApiBearerAuth, ApiOperation } from "@nestjs/swagger";

@Controller("images")
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "이미지 목록 조회" })
  findAll() {
    return this.imagesService.findAll();
  }
}
