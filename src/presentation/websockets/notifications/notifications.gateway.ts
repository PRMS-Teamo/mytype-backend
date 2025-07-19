// src/presentation/websockets/notifications/notification.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  ConnectedSocket,
  OnGatewayInit,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { RedisService } from "@/infrastructure/cache/redis.service";
import { JwtService } from "@nestjs/jwt";
import { UnauthorizedException, Logger } from "@nestjs/common";

@WebSocketGateway({
  namespace: "/notifications",
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"],
  auth: {
    headers: ["Authorization"],
  },
})
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(NotificationsGateway.name);

  constructor(
    private readonly redisService: RedisService,
    private readonly jwtService: JwtService,
  ) {}

  afterInit(server: Server) {
    this.logger.log("🔌 WebSocket Gateway 초기화 완료");
    this.logger.log(
      `📡 서버 정보: ${server.engine?.clientsCount || 0} 클라이언트 연결됨`,
    );
  }

  async handleConnection(client: Socket) {
    this.logger.log(`🔗 새로운 연결 시도: ${client.id}`);
    this.logger.log(
      "📋 클라이언트 헤더:",
      JSON.stringify(client.handshake.headers, null, 2),
    );
    this.logger.log(`🌐 클라이언트 주소: ${client.handshake.address}`);
    this.logger.log(
      "🔧 클라이언트 쿼리:",
      JSON.stringify(client.handshake.query, null, 2),
    );

    try {
      // JWT 토큰 추출
      const authHeader = client.handshake.headers.authorization;
      this.logger.log(`🔑 Authorization 헤더: ${authHeader}`);

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        this.logger.error(`❌ JWT 토큰 없음 또는 잘못된 형식: ${authHeader}`);
        throw new UnauthorizedException("JWT 토큰이 필요합니다.");
      }

      const token = authHeader.substring(7); // "Bearer " 제거
      this.logger.log(`🎫 토큰 길이: ${token.length}자`);

      // JWT 토큰 검증
      const payload = await this.jwtService.verifyAsync(token);
      this.logger.log("🔍 JWT Payload:", JSON.stringify(payload, null, 2));

      const userId = payload.userId; // JWT 페이로드에서 userId 추출
      this.logger.log("🔍 Extracted userId:", userId);

      if (!userId) {
        this.logger.error(
          `❌ userId가 토큰에 없음: ${JSON.stringify(payload)}`,
        );
        throw new UnauthorizedException("유효하지 않은 토큰입니다.");
      }

      // Redis에 유저-소켓 매핑 저장
      await this.redisService.setUserSocket(userId, client.id);
      this.logger.log(`✅ User ${userId} connected with socket ${client.id}`);

      // 클라이언트에 연결 성공 알림
      client.emit("connected", { userId, message: "WebSocket 연결 성공" });
      this.logger.log(`🎉 연결 성공: ${userId}`);
    } catch (error) {
      this.logger.error(`❌ WebSocket 연결 실패: ${error.message}`);
      this.logger.error(`❌ 에러 스택: ${error.stack}`);
      this.logger.error(`❌ 에러 타입: ${error.constructor.name}`);

      client.emit("error", {
        message: "인증 실패",
        details: error.message,
        timestamp: new Date().toISOString(),
      });
      client.disconnect();
    }
  }

  async handleDisconnect(client: Socket) {
    this.logger.log(`🔌 연결 해제: ${client.id}`);

    try {
      // 연결 해제 시 Redis에서 소켓ID 제거
      for (const [key, value] of await this.redisService
        .getRedisClient()
        .scan(0, "MATCH", "user:socket:*")) {
        if (value === client.id) {
          const userId = key.replace("user:socket:", "");
          await this.redisService.removeUserSocket(userId);
          this.logger.log(`👋 User ${userId} disconnected`);
          break;
        }
      }
    } catch (error) {
      this.logger.error(`❌ 연결 해제 중 오류: ${error.message}`);
    }
  }

  // 특정 유저에게 알림 전송
  async notifyUser(userId: string, payload: any) {
    const socketId = await this.redisService.getUserSocket(userId);
    if (socketId) {
      this.server.to(socketId).emit("notification", payload);
      this.logger.log(
        `📨 Notification sent to user ${userId} via socket ${socketId}`,
      );
    } else {
      this.logger.log(`⚠️ User ${userId} is not connected`);
    }
  }

  // 모든 연결된 유저에게 브로드캐스트
  broadcastToAll(payload: any) {
    this.server.emit("notification", payload);
    this.logger.log(
      `📢 Broadcast to all users: ${this.server.engine?.clientsCount || 0} clients`,
    );
  }

  // JWT 토큰 정보 확인용 테스트 메서드
  @SubscribeMessage("test-token")
  async testToken(@ConnectedSocket() client: Socket) {
    this.logger.log(`🧪 토큰 테스트 요청: ${client.id}`);

    try {
      const authHeader = client.handshake.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        this.logger.error("❌ 토큰 테스트 실패: 토큰 없음");
        client.emit("token-test-result", { error: "토큰이 없습니다." });
        return;
      }

      const token = authHeader.substring(7);
      const payload = await this.jwtService.verifyAsync(token);

      this.logger.log(`✅ 토큰 테스트 성공: ${payload.userId}`);

      client.emit("token-test-result", {
        success: true,
        payload: payload,
        extractedUserId: payload.userId,
        tokenType: payload.type,
      });
    } catch (error) {
      this.logger.error(`❌ 토큰 테스트 실패: ${error.message}`);
      client.emit("token-test-result", {
        error: error.message,
        success: false,
      });
    }
  }
}
