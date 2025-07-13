import { Global, Module } from "@nestjs/common";
import { PostgresModule } from "./database/postgres/postgres.module";
import { MongoModule } from "./database/mongo/mongo.module";
import { RedisModule } from "./cache/redis.module";
import { LoggerModule } from "./loggers/logger.module";
import { SchedulerModule } from "./scheduler/scheduler.module";
import { FilesModule } from "./storage/files/files.module";

@Global()
@Module({
  imports: [
    PostgresModule,
    MongoModule,
    RedisModule,
    LoggerModule,
    SchedulerModule,
    FilesModule,
  ],
  exports: [
    PostgresModule,
    MongoModule,
    RedisModule,
    LoggerModule,
    SchedulerModule,
    FilesModule,
  ],
})
export class InfrastructureModule {}
