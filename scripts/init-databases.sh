#!/bin/bash

# 환경 변수 로드
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# 기본값 설정
DB_USER=${DB_USER:-teamo}
DB_PASSWORD=${DB_PASSWORD:-teamo}
DB_NAME=${DB_NAME:-teamo}
MONGO_DB=${MONGO_DB:-teamo}

echo "🔧 데이터베이스 초기화 스크립트 시작"
echo "사용자: $DB_USER"
echo "데이터베이스: $DB_NAME"
echo "MongoDB 데이터베이스: $MONGO_DB"

# PostgreSQL 초기화 스크립트 생성
cat > databases/postgres/init-database.sql << EOF
CREATE DATABASE $DB_NAME;

CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';

GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;

\c $DB_NAME;

-- 추가적인 테이블 생성이나 초기 데이터 삽입이 필요한 경우 여기에 추가
EOF

echo "✅ PostgreSQL 초기화 스크립트 생성 완료"

# MongoDB 초기화 스크립트 생성
cat > databases/mongo/init.js << EOF
db = db.getSiblingDB("$MONGO_DB");

db.createUser({
  user: "$DB_USER",
  pwd: "$DB_PASSWORD",
  roles: [
    {
      role: "readWrite",
      db: "$MONGO_DB",
    },
  ],
});

// 초기 컬렉션 생성 
db.createCollection("users");
db.createCollection("teams");
db.createCollection("applies");
EOF

echo "✅ MongoDB 초기화 스크립트 생성 완료"

# .env 파일 업데이트 (기존 파일 백업)
if [ -f .env ]; then
    cp .env .env.backup
    echo "📋 .env 파일 백업 생성: .env.backup"
fi

# .env 파일 생성/업데이트
cat > .env << EOF
# Server Configuration
NODE_ENV=development
PORT=3000

# Database Configuration
MONGODB_URI=mongodb://$DB_USER:$DB_PASSWORD@mongo_teamo:27017/$MONGO_DB?authSource=$MONGO_DB

POSTGRES_URL=postgresql://$DB_USER:$DB_PASSWORD@pg_teamo:5432/$DB_NAME

DIRECT_URL=postgresql://$DB_USER:$DB_PASSWORD@pg_teamo:5432/$DB_NAME

# CORS Configuration
CORS_ORIGIN=*
CORS_METHODS=GET,HEAD,PUT,PATCH,POST,DELETE
CORS_CREDENTIALS=true

# Logging Configuration
LOG_LEVEL=debug
LOG_PRETTY_PRINT=true

# Security Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=1d
COOKIE_SECRET=your_cookie_secret_key

# Rate Limiting
RATE_LIMIT_WINDOW=15m
RATE_LIMIT_MAX=100 

# Health Check
HEALTH_CHECK_PATH=
HEALTH_CHECK_INTERVAL=
HEALTH_CHECK_TIMEOUT=
EOF

echo "✅ .env 파일 업데이트 완료"

echo "🎉 데이터베이스 초기화 설정 완료!"
echo "다음 명령어로 Docker 컨테이너를 시작하세요:"
echo "docker-compose up --build" 