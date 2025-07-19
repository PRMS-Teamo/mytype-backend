import { PartialType } from "@nestjs/mapped-types";
import { CreateNotificationDto } from "./create-notification.dto";
import { NotificationType } from "@mongo-client";

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly teamId: string,
    public readonly teamPositionId: string,
    public readonly type: NotificationType,
    public readonly content: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly isRead: boolean,
  ) {
    super(
      id,
      userId,
      teamId,
      teamPositionId,
      type,
      content,
      createdAt,
      updatedAt,
      isRead,
    );
  }
}
