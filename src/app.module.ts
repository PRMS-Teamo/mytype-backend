import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { APP_GUARD } from "@nestjs/core";
import { UsersModule } from "./apis/users/users.module";
import { AuthModule } from "./apis/auth/auth.module";
import { AdminModule } from "./apis/admin/admin.module";
import { ChatsModule } from "./websockets/chats/chats.module";
import { TeamsModule } from "./apis/teams/teams.module";
import { AppliesModule } from "./apis/applies/applies.module";
import { PrismaClient as PgClient } from "@/prisma/postgres-client";
import { PrismaClient as MongoClient } from "@/prisma/mongo-client";
import { LoggerModule } from "./loggers/logger.module";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { ConfigModule } from "@nestjs/config";
import { RepositoriesModule } from "@/repositories/repositories.module";

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
    LoggerModule,
    PgClient,
    MongoClient,
    AuthModule,
    UsersModule,
    TeamsModule,
    AppliesModule,
    AdminModule,
    ChatsModule,
    AppliesModule,
    RepositoriesModule,
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
