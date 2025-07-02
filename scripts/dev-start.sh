#!/bin/bash

echo "🚀 Starting Development Environment"
echo "================================="

# 환경 변수 설정 확인
if [ ! -f ".env" ]; then
    echo "⚠️  .env file not found. Creating from example..."
    cat > .env << EOF
# Database Configuration
DB_USER=teamo
DB_PASSWORD=teamo
DB_NAME=teamo

# Prisma Configuration
DATABASE_URL=postgresql://teamo:teamo@localhost:54332/teamo

# Development Settings
PRISMA_FORCE_RESET=false
RESET_DB=false
EOF
    echo "✅ Created .env file with default values"
fi

# 컨테이너 시작
echo "🐳 Starting Docker containers..."
docker-compose up --build -d

echo "⏳ Waiting for services to be ready..."
sleep 5

echo "📊 Checking service status..."
docker-compose ps

echo ""
echo "✅ Development environment is starting up!"
echo ""
echo "🔗 Available services:"
echo "   - Backend API: http://localhost:30040"
echo "   - PostgreSQL: localhost:54332"
echo "   - MongoDB: localhost:27027"
echo "   - Redis: localhost:6389"
echo ""
echo "📋 Useful commands:"
echo "   - View logs: docker-compose logs -f backend_teamo"
echo "   - Reset DB: ./scripts/dev-reset.sh"
echo "   - Stop all: docker-compose down" 