import { ApiProperty } from "@nestjs/swagger";
import { apply_status, action } from "@postgres-client";

export class UpsertApplyResponseDto {
  @ApiProperty({ description: "사용자 ID" })
  user_id: string;

  @ApiProperty({ description: "팀 ID" })
  team_id: string;

  @ApiProperty({
    description: "지원 메시지",
    required: false,
  })
  message?: string;

  @ApiProperty({
    description: "지원 상태",
    enum: apply_status,
    example: "SUBMITTED",
  })
  apply_status: apply_status;

  @ApiProperty({
    description: "지원 유형",
    enum: action,
    example: "APPLY",
  })
  action: action;

  @ApiProperty({ description: "생성일시" })
  created_at: Date;

  @ApiProperty({ description: "수정일시" })
  updated_at: Date;
}
