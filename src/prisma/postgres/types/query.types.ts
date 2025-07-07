import { Prisma as Postgres } from "@/prisma/postgres/postgres-client";
import { PaginationRequest } from "@/common/params/pagination.types";
import { Sort } from "@/common/params/sort.types";

// 기본 쿼리 옵션 타입
export interface BaseQueryOptions {
  skip?: number;
  take?: number;
  orderBy?: Sort;
  select?: Record<string, boolean>;
  include?: Record<string, boolean>;
}

// ID 기반 쿼리 타입
export interface IdQueryOptions extends BaseQueryOptions {
  id: string;
}

// 여러 ID 기반 쿼리 타입
export interface IdsQueryOptions extends BaseQueryOptions {
  ids: string[];
}

// 검색 쿼리 타입
export interface SearchQueryOptions extends BaseQueryOptions {
  search?: string;
  searchFields?: string[];
}

// 필터 쿼리 타입
export interface FilterQueryOptions extends BaseQueryOptions {
  filters?: Record<string, any>;
}

// 복합 쿼리 타입 (모든 옵션 포함)
export interface ComplexQueryOptions extends BaseQueryOptions {
  id?: string;
  ids?: string[];
  search?: string;
  searchFields?: string[];
  filters?: Record<string, any>;
  dateRange?: {
    startDate?: Date;
    endDate?: Date;
    field?: string;
  };
  pagination?: PaginationRequest;
  orderBy?: Sort;
}

// Prisma Where 조건을 위한 유틸리티 타입
export type PrismaWhereCondition<T> = Postgres.Args<T, "findMany">["where"];

// Prisma Select 조건을 위한 유틸리티 타입
export type PrismaSelectCondition<T> = Postgres.Args<T, "findMany">["select"];

// Prisma Include 조건을 위한 유틸리티 타입
export type PrismaIncludeCondition<T> = Postgres.Args<T, "findMany">["include"];
