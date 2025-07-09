// 정렬 방향 타입
export type SortDirection = "asc" | "desc";

// 기본 정렬 타입
export interface BaseSort {
  field: string;
  direction: SortDirection;
}

// 복합 정렬 타입
export interface CompositeSort {
  sorts: BaseSort[];
}

// 정렬 타입 (기본 정렬 또는 복합 정렬)
export type Sort = BaseSort | CompositeSort;

// 정렬 요청 타입
export interface SortRequest {
  sort?: Sort;
}

// 정렬 옵션 타입
export interface SortOptions {
  allowFields?: string[];
  defaultSort?: BaseSort;
  maxSortFields?: number;
}

// 동적 정렬을 위한 타입
export interface DynamicSort {
  [key: string]: SortDirection;
}

// 정렬 우선순위 타입
export interface SortPriority {
  field: string;
  direction: SortDirection;
  priority: number;
}

// 정렬 우선순위 배열 타입
export type SortPriorityArray = SortPriority[];
