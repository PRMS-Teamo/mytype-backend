-- PostgreSQL 초기화 스크립트 (안전한 버전)
-- 데이터베이스가 존재하지 않는 경우에만 생성
DO $$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'teamo') THEN
      EXECUTE 'CREATE DATABASE teamo';
   END IF;
END
$$;

-- 사용자가 존재하지 않는 경우에만 생성
DO $$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'teamo') THEN
      CREATE USER teamo WITH PASSWORD 'teamo';
   END IF;
END
$$;

-- 권한 부여 (DB가 이미 있으면 에러 없이 넘어감)
GRANT ALL PRIVILEGES ON DATABASE teamo TO teamo;

-- 추가적인 테이블 생성이나 초기 데이터 삽입이 필요한 경우 여기에 추가
