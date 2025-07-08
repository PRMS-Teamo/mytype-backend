import { Global, Module } from "@nestjs/common";
import { PostgresModule } from "./database/postgres/postgres.module";
import { MongoModule } from "./database/mongo/mongo.module";
import { RedisModule } from "./cache/redis.module";
import { LoggerModule } from "./loggers/logger.module";

@Global()
@Module({
  imports: [PostgresModule, MongoModule, RedisModule, LoggerModule],
  exports: [PostgresModule, MongoModule, RedisModule, LoggerModule],
})
export class InfrastructureModule {}
