import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { ImagesService } from "@/apis/images/images.service";
import { S3Service } from "@/infrastructure/storage/files/s3/s3.service";
import { ImagesModule } from "../images/images.module";
import { S3Module } from "@/infrastructure/storage/files/s3/s3.module";

@Module({
  imports: [ImagesModule, S3Module],
  controllers: [UsersController],
  providers: [UsersService, ImagesService, S3Service],
  exports: [UsersService],
})
export class UsersModule {}
