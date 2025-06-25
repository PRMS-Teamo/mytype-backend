# 데이터베이스 초기화 스크립트

이 디렉토리에는 데이터베이스 초기화 및 환경 설정을 위한 스크립트들이 포함되어 있습니다.

## 📁 파일 구조

```
scripts/
├── init-databases.sh      # 데이터베이스 초기화 스크립트
├── setup-env.sh          # 환경별 설정 스크립트
└── README.md             # 현재 파일
```

## 🚀 사용방법

### 1. 기본 초기화 (기본값 사용)

```bash
./scripts/init-databases.sh
```

### 2. 환경별 설정

```bash
# 개발 환경
./scripts/setup-env.sh development

# 스테이징 환경
./scripts/setup-env.sh staging

# 프로덕션 환경
./scripts/setup-env.sh production
```

### 3. 커스텀 환경 변수 사용

```bash
# 환경 변수 설정
export DB_USER="myuser"
export DB_PASSWORD="mypassword"
export DB_NAME="mydb"
export MONGO_DB="mymongo"

# 초기화 실행
./scripts/init-databases.sh
```

## 🔧 환경 변수

| 변수명        | 기본값  | 설명                      |
| ------------- | ------- | ------------------------- |
| `DB_USER`     | `teamo` | 데이터베이스 사용자명     |
| `DB_PASSWORD` | `teamo` | 데이터베이스 비밀번호     |
| `DB_NAME`     | `teamo` | PostgreSQL 데이터베이스명 |
| `MONGO_DB`    | `teamo` | MongoDB 데이터베이스명    |

## 📋 스크립트 동작 과정

1. **환경 변수 로드**: `.env` 파일에서 기존 설정을 로드
2. **기본값 설정**: 환경 변수가 없으면 기본값 사용
3. **PostgreSQL 스크립트 생성**: `databases/postgres/init-database.sql` 생성
4. **MongoDB 스크립트 생성**: `databases/mongo/init.js` 생성
5. **.env 파일 업데이트**: 새로운 설정으로 `.env` 파일 업데이트
6. **백업 생성**: 기존 `.env` 파일을 `.env.backup`으로 백업

## 🐳 Docker Compose 연동

스크립트 실행 후 Docker Compose를 사용하여 컨테이너를 시작할 수 있습니다:

```bash
# 데이터베이스 초기화
./scripts/init-databases.sh

# Docker 컨테이너 시작
docker-compose up -d
```

## ⚠️ 주의사항

- 스크립트 실행 전 실행 권한 확인: `chmod +x scripts/*.sh`
- 기존 `.env` 파일은 자동으로 백업
- 데이터베이스 컨테이너를 재시작하면 초기화 스크립트가 다시 실행 됨.

## 🔄 롤백

설정을 되돌리려면 백업 파일을 사용해주세요!

```bash
cp .env.backup .env
```
