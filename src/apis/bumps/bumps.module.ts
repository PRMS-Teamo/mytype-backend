import { Module } from "@nestjs/common";
import { BumpsService } from "./bumps.service";
import { BumpsController } from "./bumps.controller";

@Module({
  controllers: [BumpsController],
  providers: [BumpsService],
})
export class BumpsModule {}
