#!/bin/bash

# 사용법: ./scripts/setup-env.sh [development|staging|production]

ENV=${1:-development}

case $ENV in
  "development")
    MONGO_DB_NAME=teamo
    MONGO_DB_USER=teamo
    MONGO_DB_USER_PASSWORD=teamo
    POSTGRES_DB_NAME=teamo
    POSTGRES_DB_USER=teamo
    POSTGRES_DB_USER_PASSWORD=teamo
    ;;
  "staging")
    MONGO_DB_NAME=teamo
    MONGO_DB_USER=teamo
    MONGO_DB_USER_PASSWORD=teamo
    POSTGRES_DB_NAME=teamo
    POSTGRES_DB_USER=teamo
    POSTGRES_DB_USER_PASSWORD=teamo
    ;;
  "production")
    MONGO_DB_NAME=teamo
    MONGO_DB_USER=teamo
    MONGO_DB_USER_PASSWORD=teamo
    POSTGRES_DB_NAME=teamo
    POSTGRES_DB_USER=teamo
    POSTGRES_DB_USER_PASSWORD=teamo
    ;;
  *)
    echo "❌ 잘못된 환경입니다. development, staging, production 중 선택하세요."
    exit 1
    ;;
esac

echo "🔧 $ENV 환경 설정 시작..."

# 환경 변수 설정
export MONGO_DB_NAME=$MONGO_DB_NAME
export MONGO_DB_USER=$MONGO_DB_USER
export MONGO_DB_USER_PASSWORD=$MONGO_DB_USER_PASSWORD
export POSTGRES_DB_NAME=$POSTGRES_DB_NAME
export POSTGRES_DB_USER=$POSTGRES_DB_USER
export POSTGRES_DB_USER_PASSWORD=$POSTGRES_DB_USER_PASSWORD

# 초기화 스크립트 실행
./scripts/init-databases.sh

echo "$ENV 환경 설정 완료!" 