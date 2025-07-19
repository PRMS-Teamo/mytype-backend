const { io } = require("socket.io-client");

// JWT 토큰 (실제 토큰으로 교체하세요)
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyZjFhODVjNS0yMTg1LTRkNjYtYjQ4OC03OTAyMWZjNmIwNzAiLCJuYW1lIjoidGVzdC11c2VyLTIyMjIiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzUyOTI0OTExLCJleHAiOjE3NTI5Mjg1MTF9.IpvXqWSTVAHWOvXDrfSDDPVROU11EqW_USUTlrLqqAo";

// Socket.IO 클라이언트 생성
const socket = io("http://localhost:30040/notifications", {
  extraHeaders: {
    Authorization: `Bearer ${token}`,
  },
  transports: ["websocket", "polling"],
});

// 연결 이벤트
socket.on("connect", () => {
  console.log("✅ 연결 성공!");
  console.log("Socket ID:", socket.id);

  // 토큰 테스트 이벤트 전송
  socket.emit("test-token");
});

// 연결 실패 이벤트
socket.on("connect_error", (error) => {
  console.error("❌ 연결 실패:", error.message);
  console.error("에러 상세:", error);
});

// 연결 해제 이벤트
socket.on("disconnect", (reason) => {
  console.log("🔌 연결 해제:", reason);
});

// 서버로부터 받는 이벤트들
socket.on("connected", (data) => {
  console.log("🎉 서버 연결 확인:", data);
});

socket.on("token-test-result", (data) => {
  console.log("🧪 토큰 테스트 결과:", data);
});

socket.on("error", (data) => {
  console.error("❌ 서버 에러:", data);
});

// 5초 후 연결 해제
setTimeout(() => {
  console.log("🔄 5초 후 연결 해제...");
  socket.disconnect();
  process.exit(0);
}, 5000);

console.log("🚀 Socket.IO 클라이언트 시작...");
