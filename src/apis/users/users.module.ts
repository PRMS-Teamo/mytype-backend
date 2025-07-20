import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { ImagesService } from "@/apis/images/images.service";
import { ImagesModule } from "../images/images.module";

@Module({
  imports: [ImagesModule],
  controllers: [UsersController],
  providers: [UsersService, ImagesService],
  exports: [UsersService],
})
export class UsersModule {}
