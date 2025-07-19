import { apply_status, action, recruit_status } from "@postgres-client";

// 데이터베이스 결과 타입 (Prisma 결과와 호환)
interface ApplyHistoryDbResult {
  user_id: string;
  message?: string | null;
  apply_status: apply_status;
  action: action;
  created_at: Date | null;
  updated_at: Date | null;
  reply?: string | null;
  is_read: boolean;
  team_positions?: {
    id?: string;
    teams?: {
      id: string;
      title: string | null;
      recruit_status: recruit_status | null;
    } | null;
    positions?: {
      id: string;
      name: string | null;
    } | null;
  } | null;
}

// API 응답 타입
export interface ApplyResponse {
  userId: string;
  message?: string;
  applyStatus: apply_status;
  action: action;
  createdAt: Date;
  updatedAt: Date;
  reply?: string;
  isRead: boolean;
  teamPosition?: {
    teamPositionId?: string;
    team?: {
      teamId: string;
      title: string;
      recruitStatus: recruit_status;
    };
    position?: {
      positionId: string;
      positionName: string;
    };
  };
}

/**
 * 단일 지원 기록을 API 응답 형식으로 변환
 */
export function mapApplyToResponse(
  dbResult: ApplyHistoryDbResult,
): ApplyResponse {
  return {
    userId: dbResult.user_id,
    message: dbResult.message || undefined,
    applyStatus: dbResult.apply_status,
    action: dbResult.action,
    createdAt: dbResult.created_at || new Date(),
    updatedAt: dbResult.updated_at || new Date(),
    reply: dbResult.reply || undefined,
    isRead: dbResult.is_read,
    teamPosition: dbResult.team_positions
      ? {
          teamPositionId: dbResult.team_positions.id,
          team: dbResult.team_positions.teams
            ? {
                teamId: dbResult.team_positions.teams.id,
                title: dbResult.team_positions.teams.title || "",
                recruitStatus:
                  dbResult.team_positions.teams.recruit_status ||
                  ("CLOSE" as recruit_status),
              }
            : undefined,
          position: dbResult.team_positions.positions
            ? {
                positionId: dbResult.team_positions.positions.id,
                positionName: dbResult.team_positions.positions.name || "",
              }
            : undefined,
        }
      : undefined,
  };
}

/**
 * 지원 기록 배열을 API 응답 형식으로 변환
 */
export function mapAppliesToResponse(
  dbResults: ApplyHistoryDbResult[],
): ApplyResponse[] {
  return dbResults.map(mapApplyToResponse);
}

/**
 * 선택적 매핑 - 특정 필드만 변환
 */
export function mapApplyToPartialResponse(
  dbResult: ApplyHistoryDbResult,
  fields: (keyof ApplyResponse)[],
): Partial<ApplyResponse> {
  const fullResponse = mapApplyToResponse(dbResult);
  const partialResponse: Partial<ApplyResponse> = {};

  fields.forEach((field) => {
    if (field in fullResponse) {
      (partialResponse as any)[field] = fullResponse[field];
    }
  });

  return partialResponse;
}

/**
 * 팀 정보만 추출하는 매퍼
 */
export function mapApplyTeamInfo(dbResult: ApplyHistoryDbResult) {
  if (!dbResult.team_positions?.teams) {
    return null;
  }

  return {
    teamId: dbResult.team_positions.teams.id,
    title: dbResult.team_positions.teams.title,
    recruitStatus: dbResult.team_positions.teams.recruit_status,
  };
}

/**
 * 포지션 정보만 추출하는 매퍼
 */
export function mapApplyPositionInfo(dbResult: ApplyHistoryDbResult) {
  if (!dbResult.team_positions?.positions) {
    return null;
  }

  return {
    positionId: dbResult.team_positions.positions.id,
    positionName: dbResult.team_positions.positions.name,
  };
}
