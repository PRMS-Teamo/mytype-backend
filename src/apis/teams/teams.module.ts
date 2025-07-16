import { Module } from "@nestjs/common";
import { TeamsService } from "./teams.service";
import { TeamsController } from "./teams.controller";
import { AuthModule } from "@/apis/auth/auth.module";
import { UsersModule } from "@/apis/users/users.module";
import { UsersService } from "@/apis/users/users.service";
import { ImagesService } from "../images/images.service";
import { ImagesModule } from "../images/images.module";
import { S3Service } from "@/infrastructure/storage/files/s3/s3.service";
import { S3Module } from "@/infrastructure/storage/files/s3/s3.module";

@Module({
  imports: [UsersModule, AuthModule, ImagesModule, S3Module],
  controllers: [TeamsController],
  providers: [TeamsService, UsersService, ImagesService, S3Service],
  exports: [TeamsService],
})
export class TeamsModule {}
