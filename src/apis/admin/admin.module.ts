import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { PostgresService } from "@/prisma/postgres/postgres.service";

@Module({
  controllers: [AdminController],
  providers: [AdminService, PostgresService],
})
export class AdminModule {}
