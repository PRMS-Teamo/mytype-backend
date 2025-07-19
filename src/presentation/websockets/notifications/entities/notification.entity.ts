import {
  Notifications as NotificationsEntity,
  NotificationType,
} from "@mongo-client";

export class Notifications implements NotificationsEntity {
  id: string;
  userId: string;
  teamId: string;
  teamPositionId: string;
  type: NotificationType;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  isRead: boolean;
}
