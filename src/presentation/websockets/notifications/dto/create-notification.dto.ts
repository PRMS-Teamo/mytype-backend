import { NotificationType } from "@mongo-client";

export class CreateNotificationDto {
  constructor(
    public readonly userId: string,
    public readonly teamId: string,
    public readonly teamPositionId: string,
    public readonly type: NotificationType,
    public readonly content: string,
  ) {}
}
