import { Module } from "@nestjs/common";
import { NotificationsService } from "@/presentation/websockets/notifications/notifications.service";
import { NotificationsGateway } from "@/presentation/websockets/notifications/notifications.gateway";
import { RedisModule } from "@/infrastructure/cache/redis.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    RedisModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>("JWT_SECRET"),
        signOptions: {
          expiresIn: configService.get<string>("JWT_EXPIRATION", "1d"),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [NotificationsGateway, NotificationsService],
  exports: [NotificationsGateway, NotificationsService],
})
export class NotificationsModule {}
