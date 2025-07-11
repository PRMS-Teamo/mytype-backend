/**
 * Stack 매핑 유틸리티 함수들
 */

// DB 데이터 타입 (실제 스키마에 맞게 수정)
export interface StackData {
  id: string;
  name: string | null; // nullable 필드로 수정
  img_url: string | null; // nullable 필드로 수정
}

// 클라이언트 응답 타입
export interface StackResponse {
  stackId: string;
  stackName: string;
  imgUrl: string;
}

// 래핑된 응답 타입
export interface StacksResponse {
  stacks: StackResponse[];
}

/**
 * DB 데이터를 클라이언트 응답 형식으로 변환
 */
export function mapToStackResponse(stack: StackData): StackResponse {
  return {
    stackId: stack.id, // id → stackId
    stackName: stack.name || "unknown", // name → stackName (null 처리)
    imgUrl: stack.img_url || "unknown", // imgUrl → imgUrl (null 처리)
  };
}

/**
 * DB 데이터 배열을 래핑된 응답으로 변환
 */
export function mapToStacksResponse(stacks: StackData[]): StacksResponse {
  return {
    stacks: stacks.map(mapToStackResponse),
  };
}

/**
 * GetStackDto 배열을 래핑된 응답으로 변환 (DTO 이미 변환된 경우)
 */
export function wrapStacksResponse<T>(stacks: T[]): { stacks: T[] } {
  return {
    stacks: stacks,
  };
}
