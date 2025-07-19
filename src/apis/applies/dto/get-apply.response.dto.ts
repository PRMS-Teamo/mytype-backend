import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { apply_status, action, recruit_status } from "@postgres-client";

export class GetApplyResponseDto {
  @ApiProperty({ description: "사용자 ID" })
  user_id: string;

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

  @ApiProperty({ description: "답변", required: false })
  reply?: string;

  @ApiProperty({ description: "읽음 여부" })
  is_read: boolean;

  @ApiProperty({ description: "팀 포지션 정보" })
  @Transform(({ obj }) => {
    if (obj.team_positions) {
      return {
        team: obj.team_positions.teams
          ? {
              teamId: obj.team_positions.teams.id,
              title: obj.team_positions.teams.title,
              recruit_status: obj.team_positions.teams.recruit_status,
            }
          : null,
        position: obj.team_positions.positions
          ? {
              positionId: obj.team_positions.positions.id,
              positionName: obj.team_positions.positions.name,
            }
          : null,
      };
    }
    return null;
  })
  teamPosition: {
    team: {
      teamId: string;
      title: string;
      recruit_status: recruit_status;
    };
    position: {
      positionId: string;
      positionName: string;
    };
  };
}
