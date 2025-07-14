import { Module } from "@nestjs/common";
import { ImagesService } from "@/apis/images/images.service";
import { ImagesController } from "@/apis/images/images.controller";

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
