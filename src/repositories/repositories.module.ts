import { Module } from "@nestjs/common";
import { StacksRepository } from "@/repositories/stacks.repository";
import { PrismaService } from "@/databases/prisma/prisma.service";
import { PositionRepository } from "@/repositories/position.repository";

@Module({
  providers: [StacksRepository, PositionRepository, PrismaService],
  exports: [StacksRepository, PositionRepository],
})
export class RepositoriesModule {}
