import { Module } from "@nestjs/common";
import { NotificationsService } from "@/presentation/websockets/notifications/notifications.service";
import { NotificationsGateway } from "@/presentation/websockets/notifications/notifications.gateway";

@Module({
  providers: [NotificationsGateway, NotificationsService],
  exports: [NotificationsGateway],
})
export class NotificationsModule {}
