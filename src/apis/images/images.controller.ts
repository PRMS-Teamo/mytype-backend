import { Controller, Get, Param, UseGuards } from "@nestjs/common";
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

  @Get(":imageId")
  @ApiOperation({ summary: "이미지 조회" })
  findImageByImageId(@Param("imageId") imageId: string) {
    return this.imagesService.findImageByImageId(imageId);
  }
}
