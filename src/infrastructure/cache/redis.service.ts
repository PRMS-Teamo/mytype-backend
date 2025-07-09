import { Inject, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Redis from "ioredis";
import { IRedisService } from "./interfaces/redis.interface";

@Injectable()
export class RedisService implements IRedisService {
  private readonly logger = new Logger(RedisService.name);
  private readonly keyPrefix: string;

  constructor(
    @Inject("REDIS_CLIENT") private readonly redis: Redis,
    private readonly configService: ConfigService,
  ) {
    this.keyPrefix =
      this.configService.get<string>("redis.keyPrefix") || "mytype:";
  }

  private getFullKey(key: string): string {
    return `${this.keyPrefix}${key}`;
  }

  async set(key: string, value: any, ttlSeconds?: number): Promise<void> {
    const fullKey = this.getFullKey(key);
    const data = typeof value === "string" ? value : JSON.stringify(value);

    try {
      if (ttlSeconds) {
        await this.redis.set(fullKey, data, "EX", ttlSeconds);
      } else {
        await this.redis.set(fullKey, data);
      }
      this.logger.debug(`Set key: ${fullKey}`);
    } catch (error) {
      this.logger.error(`Failed to set key: ${fullKey}`, error);
      throw error;
    }
  }

  async get<T = any>(key: string): Promise<T | null> {
    const fullKey = this.getFullKey(key);

    try {
      const value = await this.redis.get(fullKey);
      if (!value) return null;

      try {
        return JSON.parse(value) as T;
      } catch {
        return value as T;
      }
    } catch (error) {
      this.logger.error(`Failed to get key: ${fullKey}`, error);
      throw error;
    }
  }

  async del(key: string): Promise<void> {
    const fullKey = this.getFullKey(key);

    try {
      await this.redis.del(fullKey);
      this.logger.debug(`Deleted key: ${fullKey}`);
    } catch (error) {
      this.logger.error(`Failed to delete key: ${fullKey}`, error);
      throw error;
    }
  }

  async exists(key: string): Promise<boolean> {
    const fullKey = this.getFullKey(key);

    try {
      const result = await this.redis.exists(fullKey);
      return result === 1;
    } catch (error) {
      this.logger.error(`Failed to check existence of key: ${fullKey}`, error);
      throw error;
    }
  }

  async expire(key: string, seconds: number): Promise<boolean> {
    const fullKey = this.getFullKey(key);

    try {
      const result = await this.redis.expire(fullKey, seconds);
      return result === 1;
    } catch (error) {
      this.logger.error(`Failed to set expiry for key: ${fullKey}`, error);
      throw error;
    }
  }

  async ttl(key: string): Promise<number> {
    const fullKey = this.getFullKey(key);

    try {
      return await this.redis.ttl(fullKey);
    } catch (error) {
      this.logger.error(`Failed to get TTL for key: ${fullKey}`, error);
      throw error;
    }
  }

  async publish(channel: string, message: string): Promise<number> {
    try {
      const result = await this.redis.publish(channel, message);
      this.logger.debug(`Published message to channel: ${channel}`);
      return result;
    } catch (error) {
      this.logger.error(`Failed to publish to channel: ${channel}`, error);
      throw error;
    }
  }

  async subscribe(
    channel: string,
    callback: (message: string) => void,
  ): Promise<void> {
    try {
      await this.redis.subscribe(channel);
      this.redis.on("message", (receivedChannel, message) => {
        if (receivedChannel === channel) {
          callback(message);
        }
      });
      this.logger.debug(`Subscribed to channel: ${channel}`);
    } catch (error) {
      this.logger.error(`Failed to subscribe to channel: ${channel}`, error);
      throw error;
    }
  }

  async unsubscribe(channel: string): Promise<void> {
    try {
      await this.redis.unsubscribe(channel);
      this.logger.debug(`Unsubscribed from channel: ${channel}`);
    } catch (error) {
      this.logger.error(
        `Failed to unsubscribe from channel: ${channel}`,
        error,
      );
      throw error;
    }
  }
}
