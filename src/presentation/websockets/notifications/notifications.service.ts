import { Injectable } from "@nestjs/common";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { MongoService } from "@/infrastructure/database/mongo/mongo.service";
import { NotificationsGateway } from "./notifications.gateway";
import { Notifications, NotificationType } from "@mongo-client";
import { RedisService } from "@/infrastructure/cache/redis.service";

@Injectable()
export class NotificationsService {
  constructor(
    private readonly mongoService: MongoService,
    private readonly notificationsGateway: NotificationsGateway,
    private readonly redisService: RedisService,
  ) {}

  create(createNotificationDto: CreateNotificationDto): CreateNotificationDto {
    return new CreateNotificationDto(
      createNotificationDto.userId,
      createNotificationDto.teamId,
      createNotificationDto.teamPositionId,
      createNotificationDto.type,
      createNotificationDto.content,
    );
  }

  async createAndSendNotification(
    createNotificationDto: CreateNotificationDto,
  ): Promise<CreateNotificationDto> {
    try {
      // MongoDB에 알림 저장
      const notification = await this.mongoService.notifications.create({
        data: {
          userId: createNotificationDto.userId,
          teamId: createNotificationDto.teamId,
          teamPositionId: createNotificationDto.teamPositionId,
          type: createNotificationDto.type,
          content: createNotificationDto.content,
          isRead: false,
        },
      });

      // Redis 캐시 무효화
      await this.redisService.invalidateUserNotifications(
        createNotificationDto.userId,
      );

      // 읽지 않은 알림 개수 증가
      await this.redisService.incrementUnreadCount(
        createNotificationDto.userId,
      );

      // WebSocket으로 실시간 알림 전송
      await this.notificationsGateway.notifyUser(createNotificationDto.userId, {
        id: notification.id,
        type: notification.type,
        content: notification.content,
        teamId: notification.teamId,
        teamPositionId: notification.teamPositionId,
        createdAt: notification.createdAt,
        isRead: notification.isRead,
      });

      return new CreateNotificationDto(
        notification.userId,
        notification.teamId,
        notification.teamPositionId,
        notification.type as NotificationType,
        notification.content,
      );
    } catch (error) {
      console.error("Failed to create and send notification:", error);
      throw error;
    }
  }

  async getUserNotifications(userId: string): Promise<Notifications[]> {
    const cached = await this.redisService.getCachedNotifications(userId);
    if (cached) {
      return cached as Notifications[];
    }

    const notifications = await this.mongoService.notifications.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    await this.redisService.cacheUserNotifications(userId, notifications);

    return notifications;
  }

  async markAsRead(notificationId: string): Promise<void> {
    await this.mongoService.notifications.update({
      where: { id: notificationId },
      data: { isRead: true },
    });

    const notification = await this.mongoService.notifications.findUnique({
      where: { id: notificationId },
      select: { userId: true },
    });

    if (notification) {
      await this.redisService.invalidateUserNotifications(notification.userId);
      await this.redisService.decrementUnreadCount(notification.userId);
    }
  }

  async getUnreadCount(userId: string): Promise<number> {
    return await this.redisService.getUnreadCount(userId);
  }
}
