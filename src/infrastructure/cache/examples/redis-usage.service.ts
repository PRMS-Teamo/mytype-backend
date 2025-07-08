import { Injectable, Logger } from "@nestjs/common";
import { RedisService } from "../redis.service";

@Injectable()
export class RedisUsageService {
  private readonly logger = new Logger(RedisUsageService.name);

  constructor(private readonly redisService: RedisService) {}

  // 세션 관리 예시
  async setUserSession(
    userId: string,
    sessionData: any,
    ttlSeconds: number = 3600,
  ): Promise<void> {
    const key = `session:${userId}`;
    await this.redisService.set(key, sessionData, ttlSeconds);
    this.logger.log(`User session set for user: ${userId}`);
  }

  async getUserSession<T = any>(userId: string): Promise<T | null> {
    const key = `session:${userId}`;
    return await this.redisService.get<T>(key);
  }

  async removeUserSession(userId: string): Promise<void> {
    const key = `session:${userId}`;
    await this.redisService.del(key);
    this.logger.log(`User session removed for user: ${userId}`);
  }

  // 캐싱 예시
  async cacheTeamData(
    teamId: string,
    teamData: any,
    ttlSeconds: number = 1800,
  ): Promise<void> {
    const key = `team:${teamId}`;
    await this.redisService.set(key, teamData, ttlSeconds);
    this.logger.log(`Team data cached for team: ${teamId}`);
  }

  async getCachedTeamData<T = any>(teamId: string): Promise<T | null> {
    const key = `team:${teamId}`;
    return await this.redisService.get<T>(key);
  }

  // 실시간 알림 예시
  async sendNotification(userId: string, notification: any): Promise<void> {
    const channel = `notifications:${userId}`;
    await this.redisService.publish(channel, JSON.stringify(notification));
    this.logger.log(`Notification sent to user: ${userId}`);
  }

  async subscribeToNotifications(
    userId: string,
    callback: (notification: any) => void,
  ): Promise<void> {
    const channel = `notifications:${userId}`;
    await this.redisService.subscribe(channel, (message) => {
      try {
        const notification = JSON.parse(message);
        callback(notification);
      } catch (error) {
        this.logger.error(
          `Failed to parse notification message: ${message}`,
          error,
        );
      }
    });
    this.logger.log(`Subscribed to notifications for user: ${userId}`);
  }

  // 매칭 대기열 예시
  async addToMatchingQueue(userId: string, userData: any): Promise<void> {
    const key = `matching:queue:${userId}`;
    await this.redisService.set(key, userData, 300); // 5분 TTL
    this.logger.log(`User added to matching queue: ${userId}`);
  }

  async removeFromMatchingQueue(userId: string): Promise<void> {
    const key = `matching:queue:${userId}`;
    await this.redisService.del(key);
    this.logger.log(`User removed from matching queue: ${userId}`);
  }

  async isInMatchingQueue(userId: string): Promise<boolean> {
    const key = `matching:queue:${userId}`;
    return await this.redisService.exists(key);
  }

  // 임시 데이터 예시 (이메일 인증 코드 등)
  async setVerificationCode(email: string, code: string): Promise<void> {
    const key = `verification:${email}`;
    await this.redisService.set(key, code, 600); // 10분 TTL
    this.logger.log(`Verification code set for email: ${email}`);
  }

  async getVerificationCode(email: string): Promise<string | null> {
    const key = `verification:${email}`;
    return await this.redisService.get<string>(key);
  }

  async removeVerificationCode(email: string): Promise<void> {
    const key = `verification:${email}`;
    await this.redisService.del(key);
    this.logger.log(`Verification code removed for email: ${email}`);
  }
}
