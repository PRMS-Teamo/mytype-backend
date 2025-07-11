/**
 * Position 매핑 유틸리티 함수들
 */

// DB 데이터 타입
export interface PositionData {
  id: string;
  name: string;
}

// 클라이언트 응답 타입
export interface PositionResponse {
  positionId: string;
  positionName: string;
}

// 래핑된 응답 타입
export interface PositionsResponse {
  positions: PositionResponse[];
}

/**
 * DB 데이터를 클라이언트 응답 형식으로 변환
 */
export function mapToPositionResponse(
  position: PositionData,
): PositionResponse {
  return {
    positionId: position.id, // id → positionId
    positionName: position.name, // name → positionName
  };
}

/**
 * DB 데이터 배열을 래핑된 응답으로 변환
 */
export function mapToPositionsResponse(
  positions: PositionData[],
): PositionsResponse {
  return {
    positions: positions.map(mapToPositionResponse),
  };
}

/**
 * GetPositionDto 배열을 래핑된 응답으로 변환 (DTO 이미 변환된 경우)
 */
export function wrapPositionsResponse<T>(positions: T[]): { positions: T[] } {
  return {
    positions: positions,
  };
}
