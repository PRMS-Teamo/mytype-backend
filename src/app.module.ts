import { Module } from "@nestjs/common";
import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { APP_GUARD, APP_FILTER } from "@nestjs/core";
import { AllExceptionsFilter } from "./all-exceptions.filter";
import { UsersModule } from "@/apis/users/users.module";
import { AuthModule } from "@/apis/auth/auth.module";
import { AdminModule } from "@/apis/admin/admin.module";
import { TeamsModule } from "@/apis/teams/teams.module";
import { AppliesModule } from "@/apis/applies/applies.module";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { ConfigModule } from "@nestjs/config";
import { AnalysisModule } from "@/apis/analysis/analysis.module";
import { InfrastructureModule } from "@/infrastructure/infrastructure.module";
import { HealthModule } from "@/apis/health/health.module";
import { StacksModule } from "@/apis/stacks/stacks.module";
import { PositionsModule } from "@/apis/positions/positions.module";
import { BumpsModule } from "@/apis/bumps/bumps.module";

import { FilesModule } from "@/infrastructure/storage/files/files.module";
import { ImagesModule } from "@/apis/images/images.module";
import { WebsocketModule } from "./presentation/websocket.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        name: "short",
        ttl: 10000,
        limit: 3,
      },
      {
        name: "long",
        ttl: 60000,
        limit: 100,
      },
    ]),
    AuthModule,
    UsersModule,
    TeamsModule,
    AppliesModule,
    AdminModule,
    AnalysisModule,
    InfrastructureModule,
    HealthModule,
    StacksModule,
    PositionsModule,
    BumpsModule,
    FilesModule,
    ImagesModule,
    WebsocketModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
