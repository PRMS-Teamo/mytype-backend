import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { ConfigModule, ConfigService } from "@nestjs/config";
import * as redisStore from "cache-manager-redis-store";
import { RedisService } from "./redis.service";

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get("REDIS_HOST", "localhost"),
        port: configService.get("REDIS_PORT", 6379),
        password: configService.get("REDIS_PASSWORD"),
        db: configService.get("REDIS_DB", 0),
        ttl: 60 * 60 * 24, // 24시간
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [RedisService],
  exports: [CacheModule, RedisService],
})
export class RedisModule {}
