import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { PrismaClient as PgClient } from "@/database/prisma/postgres-client";

@Module({
  controllers: [AdminController],
  providers: [AdminService, PgClient],
})
export class AdminModule {}
