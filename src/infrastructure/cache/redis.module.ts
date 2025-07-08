import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import Redis from "ioredis";
import { RedisService } from "./redis.service";
import { RedisUsageService } from "./examples/redis-usage.service";
import redisConfig from "./config/redis.config";

@Module({
  imports: [ConfigModule.forFeature(redisConfig)],
  providers: [
    {
      provide: "REDIS_CLIENT",
      useFactory: (configService: ConfigService) => {
        const redisConfig = configService.get("redis");
        return new Redis({
          host: redisConfig.host,
          port: redisConfig.port,
          password: redisConfig.password,
          db: redisConfig.db,
          keyPrefix: redisConfig.keyPrefix,
          lazyConnect: true, // 연결을 지연시켜 모듈 초기화 속도 향상
          enableOfflineQueue: false, // 오프라인 시 큐 비활성화
        });
      },
      inject: [ConfigService],
    },
    RedisService,
    RedisUsageService, // 예시 서비스 추가
  ],
  exports: ["REDIS_CLIENT", RedisService, RedisUsageService],
})
export class RedisModule {}
