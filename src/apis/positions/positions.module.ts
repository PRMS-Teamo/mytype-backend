import { Module } from "@nestjs/common";
import { PositionService } from "./positions.service";
import { PositionsController } from "./positions.controller";

@Module({
  controllers: [PositionsController],
  providers: [PositionService],
})
export class PositionsModule {}
