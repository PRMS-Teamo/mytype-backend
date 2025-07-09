// 기본 필터 타입
export interface BaseFilter {
  field: string;
  operator: FilterOperator;
  value: any;
}

// 필터 연산자 타입
export type FilterOperator =
  | "equals"
  | "not"
  | "in"
  | "notIn"
  | "lt"
  | "lte"
  | "gt"
  | "gte"
  | "contains"
  | "startsWith"
  | "endsWith"
  | "isNull"
  | "isNotNull";

// 복합 필터 타입
export interface CompositeFilter {
  AND?: Filter[];
  OR?: Filter[];
  NOT?: Filter[];
}

// 필터 타입 (기본 필터 또는 복합 필터)
export type Filter = BaseFilter | CompositeFilter;

// 필터 요청 타입
export interface FilterRequest {
  filters?: Filter[];
  search?: string;
  searchFields?: string[];
}

// 날짜 범위 필터 타입
export interface DateRangeFilter {
  field: string;
  startDate?: Date;
  endDate?: Date;
}

// 숫자 범위 필터 타입
export interface NumberRangeFilter {
  field: string;
  min?: number;
  max?: number;
}

// 문자열 검색 필터 타입
export interface StringSearchFilter {
  field: string;
  value: string;
  caseSensitive?: boolean;
  partial?: boolean;
}
