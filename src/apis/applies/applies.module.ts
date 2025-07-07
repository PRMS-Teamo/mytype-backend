import { Module } from "@nestjs/common";
import { AppliesService } from "./applies.service";
import { AppliesController } from "./applies.controller";
import { PostgresService } from "@/prisma/postgres/postgres.service";
import { AuthModule } from "@/apis/auth/auth.module";

@Module({
  imports: [AuthModule],
  controllers: [AppliesController],
  providers: [AppliesService, PostgresService],
})
export class AppliesModule {}
