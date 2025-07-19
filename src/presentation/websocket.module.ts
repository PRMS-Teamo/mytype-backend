import { Module } from "@nestjs/common";
import { NotificationsModule } from "./websockets/notifications/notifications.module";
import { ChatsModule } from "./websockets/chats/chats.module";
import { Global } from "@nestjs/common";

@Global()
@Module({
  imports: [NotificationsModule, ChatsModule],
  exports: [NotificationsModule, ChatsModule],
})
export class WebsocketModule {}
