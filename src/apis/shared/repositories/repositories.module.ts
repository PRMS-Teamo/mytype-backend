import { Module } from "@nestjs/common";
import { StacksRepository } from "@/apis/shared/repositories/stacks.repository";
import { PositionRepository } from "@/apis/shared/repositories/position.repository";

@Module({
  providers: [StacksRepository, PositionRepository],
  exports: [StacksRepository, PositionRepository],
})
export class RepositoriesModule {}
