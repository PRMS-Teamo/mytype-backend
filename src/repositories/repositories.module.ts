import { Module } from "@nestjs/common";
import { StacksRepository } from "@/repositories/stacks.repository";
import { PrismaClient as PgClient } from "@/prisma/postgres-client";
import { PositionRepository } from "@/repositories/position.repository";

@Module({
  providers: [StacksRepository, PositionRepository, PgClient],
  exports: [StacksRepository, PositionRepository],
})
export class RepositoriesModule {}
