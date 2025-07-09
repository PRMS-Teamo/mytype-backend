import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { APP_GUARD } from "@nestjs/core";
import { UsersModule } from "@/apis/users/users.module";
import { AuthModule } from "@/apis/auth/auth.module";
import { AdminModule } from "@/apis/admin/admin.module";
import { ChatsModule } from "@/presentation/websockets/chats/chats.module";
import { TeamsModule } from "@/apis/teams/teams.module";
import { AppliesModule } from "@/apis/applies/applies.module";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { ConfigModule } from "@nestjs/config";
import { RepositoriesModule } from "@/apis/shared/repositories/repositories.module";
import { AnalysisModule } from "@/apis/analysis/analysis.module";
import { InfrastructureModule } from "@/infrastructure/infrastructure.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        name: "short",
        ttl: 1000,
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
    ChatsModule,
    RepositoriesModule,
    AnalysisModule,
    InfrastructureModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
