// 페이지네이션 요청 타입
export interface PaginationRequest {
  page?: number;
  limit?: number;
  offset?: number;
}

// 페이지네이션 응답 타입
export interface PaginationResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// 커서 기반 페이지네이션 요청 타입
export interface CursorPaginationRequest {
  cursor?: string;
  limit?: number;
}

// 커서 기반 페이지네이션 응답 타입
export interface CursorPaginationResponse<T> {
  data: T[];
  pagination: {
    nextCursor?: string;
    hasNext: boolean;
    limit: number;
  };
}

// 기본 페이지네이션 설정
export const DEFAULT_PAGINATION = {
  page: 1,
  limit: 10,
  maxLimit: 100,
} as const;

// 페이지네이션 계산 유틸리티 타입
export interface PaginationMeta {
  skip: number;
  take: number;
  page: number;
  limit: number;
}
