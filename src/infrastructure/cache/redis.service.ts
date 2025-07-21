import { Injectable, Inject, OnModuleInit } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";
import Redis from "ioredis";
import { Notifications } from "@mongo-client";

@Injectable()
export class RedisService implements OnModuleInit {
  private redis: Redis;

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  onModuleInit() {
    try {
      const store = (this.cacheManager as any).store;
      if (store && store.client) {
        this.redis = store.client;
      } else {
        this.redis = new Redis({
          host: process.env.REDIS_HOST || "localhost",
          port: parseInt(process.env.REDIS_PORT || "6379", 10),
          password: process.env.REDIS_PASSWORD,
          db: parseInt(process.env.REDIS_DB || "0", 10),
        });
      }
      console.log("Redis client initialized successfully");
    } catch (error) {
      console.error("Failed to initialize Redis client:", error);
      throw error;
    }
  }

  async setUserSocket(userId: string, socketId: string): Promise<void> {
    const key = `user:socket:${userId}`;
    await this.redis.set(key, socketId, "EX", 60 * 60 * 24);
  }

  async getUserSocket(userId: string): Promise<string | null> {
    const key = `user:socket:${userId}`;
    return await this.redis.get(key);
  }

  async removeUserSocket(userId: string): Promise<void> {
    const key = `user:socket:${userId}`;
    await this.redis.del(key);
  }

  async cacheUserNotifications(
    userId: string,
    notifications: unknown[],
  ): Promise<void> {
    const key = `notifications:${userId}`;
    await this.redis.setex(key, 60 * 30, JSON.stringify(notifications));
  }

  async getCachedNotifications(userId: string): Promise<unknown[] | null> {
    const key = `notifications:${userId}`;
    const cached = await this.redis.get(key);
    return cached ? (JSON.parse(cached) as Notifications[]) : null;
  }

  async invalidateUserNotifications(userId: string): Promise<void> {
    const key = `notifications:${userId}`;
    await this.redis.del(key);
  }

  // 읽지 않은 알림 개수
  async setUnreadCount(userId: string, count: number): Promise<void> {
    const key = `unread:${userId}`;
    await this.redis.setex(key, 60 * 60, count.toString());
  }

  async getUnreadCount(userId: string): Promise<number> {
    const key = `unread:${userId}`;
    const count = await this.redis.get(key);
    return count ? parseInt(count) : 0;
  }

  async incrementUnreadCount(userId: string): Promise<number> {
    const key = `unread:${userId}`;
    return await this.redis.incr(key);
  }

  async decrementUnreadCount(userId: string): Promise<number> {
    const key = `unread:${userId}`;
    return await this.redis.decr(key);
  }

  getRedisClient(): Redis {
    return this.redis;
  }
}
