import { Module } from "@nestjs/common";
import { AppliesService } from "./applies.service";
import { AppliesController } from "./applies.controller";
import { PrismaClient as PgClient } from "@/prisma/postgres/postgres-client";
import { PrismaClient as MongoClient } from "@/prisma/mongo/mongo-client";

@Module({
  imports: [PgClient, MongoClient],
  controllers: [AppliesController],
  providers: [AppliesService],
})
export class AppliesModule {}
