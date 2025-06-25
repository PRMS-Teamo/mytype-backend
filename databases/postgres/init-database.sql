CREATE DATABASE teamo;

CREATE USER teamo WITH PASSWORD 'teamo';

GRANT ALL PRIVILEGES ON DATABASE teamo TO teamo;

\c teamo;

-- 추가적인 테이블 생성이나 초기 데이터 삽입이 필요한 경우 여기에 추가
