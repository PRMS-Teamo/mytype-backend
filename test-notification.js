const { io } = require("socket.io-client");

// 팀장의 JWT 토큰 (알림을 받을 사람)
const teamOwnerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiMDc0MjIyOS03N2ZkLTQ1ZGEtOGFkZS1mZjc1MmJiZTU5OTkiLCJuYW1lIjoi7KeA7JuQ7YWM7Iqk7Yq47Jyg7KCAIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTc1MjkyNjIzNSwiZXhwIjoxNzUyOTI5ODM1fQ.eZCfCxndcNycOwXp1RL3YB4e8crNjv_CS_bJ7DcH2zA";

// Socket.IO 클라이언트 생성 (팀장)
const socket = io("http://localhost:30040/notifications", {
  extraHeaders: {
    Authorization: `Bearer ${teamOwnerToken}`,
  },
  transports: ["websocket", "polling"],
});

console.log("🔔 알림 수신 대기 중...");
console.log("팀장 ID: b0742229-77fd-45da-8ade-ff752bbe5999");

// 연결 이벤트
socket.on("connect", () => {
  console.log("✅ 팀장 연결 성공!");
  console.log("Socket ID:", socket.id);
});

// 연결 실패 이벤트
socket.on("connect_error", (error) => {
  console.error("❌ 연결 실패:", error.message);
});

// 연결 해제 이벤트
socket.on("disconnect", (reason) => {
  console.log("🔌 연결 해제:", reason);
});

// 서버로부터 받는 이벤트들
socket.on("connected", (data) => {
  console.log("🎉 서버 연결 확인:", data);
});

// 알림 수신 이벤트
socket.on("notification", (data) => {
  console.log("🔔 새로운 알림 수신!");
  console.log("알림 내용:", JSON.stringify(data, null, 2));
});

socket.on("error", (data) => {
  console.error("❌ 서버 에러:", data);
});

// 30초 동안 대기
setTimeout(() => {
  console.log("⏰ 30초 대기 완료. 연결 해제...");
  socket.disconnect();
  process.exit(0);
}, 30000);

console.log("🚀 알림 테스트 시작...");
console.log("이제 다른 터미널에서 지원 요청을 보내세요!");
