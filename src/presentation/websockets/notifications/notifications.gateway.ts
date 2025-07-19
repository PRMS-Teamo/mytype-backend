// src/presentation/websockets/notifications/notification.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({ namespace: "/notifications", cors: true })
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  // 유저별 소켓ID 매핑 (간단 예시, 실제로는 Redis 등 외부 저장소 권장)
  private userSocketMap = new Map<string, string>();

  handleConnection(client: Socket) {
    // 클라이언트가 연결될 때, 쿼리나 인증 토큰에서 userId 추출
    const userId = client.handshake.query.userId as string;
    if (userId) {
      this.userSocketMap.set(userId, client.id);
    }
  }

  handleDisconnect(client: Socket) {
    // 연결 해제 시 소켓ID 제거
    for (const [userId, socketId] of this.userSocketMap.entries()) {
      if (socketId === client.id) {
        this.userSocketMap.delete(userId);
        break;
      }
    }
  }

  // 특정 유저에게 알림 전송
  notifyUser(userId: string, payload: any) {
    const socketId = this.userSocketMap.get(userId);
    if (socketId) {
      this.server.to(socketId).emit("notification", payload);
    }
  }
}
