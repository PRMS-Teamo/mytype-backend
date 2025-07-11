import { Module } from "@nestjs/common";
import { StacksController } from "./stacks.controller";
import { StacksService } from "./stacks.service";
import { PositionService } from "../positions/positions.service";

@Module({
  controllers: [StacksController],
  providers: [StacksService, PositionService],
})
export class StacksModule {}
