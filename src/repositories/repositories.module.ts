import { Module } from "@nestjs/common";
import { StacksRepository } from "@/repositories/stacks.repository";
import { PostgresService } from "@/prisma/postgres/postgres.service";
import { PositionRepository } from "@/repositories/position.repository";

@Module({
  providers: [StacksRepository, PositionRepository, PostgresService],
  exports: [StacksRepository, PositionRepository],
})
export class RepositoriesModule {}
