#!/bin/bash

echo "🔄 Development Database Reset Script"
echo "=================================="

# 컨테이너 중지
echo "🛑 Stopping containers..."
docker-compose down

# 볼륨 제거 (선택적)
read -p "❓ Do you want to remove persistent volumes? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🗑️  Removing volumes..."
    docker volume rm mytype_backend_pg_teamo_data 2>/dev/null || echo "Volume doesn't exist"
fi

# 강제 리셋 모드로 재시작
echo "🚀 Starting with database reset..."
PRISMA_FORCE_RESET=true docker-compose up --build -d

echo "✅ Reset complete! Containers are starting up..."
echo "📊 Check logs with: docker-compose logs -f backend_teamo" 