import { Module } from "@nestjs/common";
import { AppliesService } from "./applies.service";
import { AppliesController } from "./applies.controller";
import { AuthModule } from "@/apis/auth/auth.module";

@Module({
  imports: [AuthModule],
  controllers: [AppliesController],
  providers: [AppliesService],
})
export class AppliesModule {}
