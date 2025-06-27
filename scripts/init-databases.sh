#!/bin/bash

# 환경 변수 로드
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# 기본값 설정
MONGO_DB_NAME=${MONGO_DB_NAME:-teamo}
MONGO_DB_USER=${MONGO_DB_USER:-teamo}
MONGO_DB_USER_PASSWORD=${MONGO_DB_USER_PASSWORD:-teamo}
POSTGRES_DB_NAME=${POSTGRES_DB_NAME:-teamo}
POSTGRES_DB_USER=${POSTGRES_DB_USER:-teamo}
POSTGRES_DB_USER_PASSWORD=${POSTGRES_DB_USER_PASSWORD:-teamo}




echo "🔧 데이터베이스 초기화 스크립트 시작"
echo "MongoDB 사용자: $MONGO_DB_USER"
echo "MongoDB 데이터베이스: $MONGO_DB_NAME"
echo "PostgreSQL 사용자: $POSTGRES_DB_USER"
echo "PostgreSQL 데이터베이스: $POSTGRES_DB_NAME"

# PostgreSQL 초기화 스크립트 생성
cat > databases/postgres/init-database.sql << EOF
-- PostgreSQL 초기화 스크립트 (안전한 버전)
-- 데이터베이스가 존재하지 않는 경우에만 생성
DO \$\$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = '$POSTGRES_DB_NAME') THEN
      EXECUTE 'CREATE DATABASE $POSTGRES_DB_NAME';
   END IF;
END
\$\$;

-- 사용자가 존재하지 않는 경우에만 생성
DO \$\$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = '$POSTGRES_DB_USER') THEN
      CREATE USER $POSTGRES_DB_USER WITH PASSWORD '$POSTGRES_DB_USER_PASSWORD';
   END IF;
END
\$\$;

-- 권한 부여 (DB가 이미 있으면 에러 없이 넘어감)
GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB_NAME TO $POSTGRES_DB_USER;

-- 추가적인 테이블 생성이나 초기 데이터 삽입이 필요한 경우 여기에 추가
EOF

echo "✅ PostgreSQL 초기화 스크립트 생성 완료"

# MongoDB 초기화 스크립트 생성
cat > databases/mongo/init.js << EOF
db = db.getSiblingDB("$MONGO_DB_NAME");

db.createUser({
  user: "$MONGO_DB_USER",
  pwd: "$MONGO_DB_USER_PASSWORD",
  roles: [
    {
      role: "readWrite",
      db: "$MONGO_DB_NAME",
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
URL=http://localhost:3000

# Database Configuration
MONGODB_URI=mongodb://$MONGO_DB_USER:$MONGO_DB_USER_PASSWORD@mongo_teamo:27017/$MONGO_DB_NAME?authSource=admin
MONGO_DB_NAME=$MONGO_DB_NAME
MONGO_DB_USER=$MONGO_DB_USER
MONGO_DB_USER_PASSWORD=$MONGO_DB_USER_PASSWORD

POSTGRES_URL=postgresql://$POSTGRES_DB_USER:$POSTGRES_DB_USER_PASSWORD@pg_teamo:5432/$POSTGRES_DB_NAME
DIRECT_URL=postgresql://$POSTGRES_DB_USER:$POSTGRES_DB_USER_PASSWORD@pg_teamo:5432/$POSTGRES_DB_NAME
POSTGRES_DB_NAME=$POSTGRES_DB_NAME
POSTGRES_DB_USER=$POSTGRES_DB_USER
POSTGRES_DB_USER_PASSWORD=$POSTGRES_DB_USER_PASSWORD

# CORS Configuration
CORS_ORIGIN=*
CORS_METHODS=GET,HEAD,PUT,PATCH,POST,DELETE
CORS_CREDENTIALS=true

# Logging Configuration
LOG_LEVEL=debug
LOG_PRETTY_PRINT=true

# Security Configuration
KAKAO_API_KEY=your_kakao_rest_api_key_here
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