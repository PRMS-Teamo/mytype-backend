import { action, apply_status } from "@postgres-client";

export function mapApplyToResponseDto(apply: {
  user_id: string;
  team_id: string;
  message: string;
  apply_status: apply_status;
  action: action;
  created_at: Date;
  updated_at: Date;
}) {
  return {
    userId: apply.user_id,
    teamId: apply.team_id,
    message: apply.message,
    applyStatus: apply.apply_status,
    action: apply.action,
    createdAt: apply.created_at,
    updatedAt: apply.updated_at,
  };
}
