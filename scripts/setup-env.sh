#!/bin/bash

# 사용법: ./scripts/setup-env.sh [development|staging|production]

ENV=${1:-development}

case $ENV in
  "development")
    DB_USER="teamo"
    DB_PASSWORD="teamo"
    DB_NAME="teamo"
    MONGO_DB="teamo"
    ;;
  "staging")
    DB_USER="teamo"
    DB_PASSWORD="teamo"
    DB_NAME="teamo"
    MONGO_DB="teamo"
    ;;
  "production")
    DB_USER="teamo"
    DB_PASSWORD="teamo"
    DB_NAME="teamo"
    MONGO_DB="teamo"
    ;;
  *)
    echo "❌ 잘못된 환경입니다. development, staging, production 중 선택하세요."
    exit 1
    ;;
esac

echo "🔧 $ENV 환경 설정 시작..."

# 환경 변수 설정
export DB_USER=$DB_USER
export DB_PASSWORD=$DB_PASSWORD
export DB_NAME=$DB_NAME
export MONGO_DB=$MONGO_DB

# 초기화 스크립트 실행
./scripts/init-databases.sh

echo "$ENV 환경 설정 완료!" 