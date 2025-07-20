import { Module } from "@nestjs/common";
import { ImagesService } from "@/apis/images/images.service";
import { ImagesController } from "@/apis/images/images.controller";
import { S3Module } from "@/infrastructure/storage/files/s3/s3.module";

@Module({
  imports: [S3Module],
  controllers: [ImagesController],
  providers: [ImagesService],
  exports: [ImagesService],
})
export class ImagesModule {}
