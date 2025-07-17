import { ApiProperty } from "@nestjs/swagger";
import { proceed_type, recruit_status } from "@postgres-client";

class PositionStackDto {
  @ApiProperty()
  stackId: string;
  @ApiProperty()
  stackName: string;
  @ApiProperty()
  imgUrl: string;
}

class TeamUsersDto {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  isOwner: boolean;
  @ApiProperty()
  message: string;
}

export class TeamPositionDto {
  @ApiProperty({ type: [PositionStackDto] })
  positionStacks: PositionStackDto[];
  @ApiProperty()
  recruitStatus: recruit_status;
  @ApiProperty()
  positionId: string;
  @ApiProperty()
  positionName: string;
  @ApiProperty()
  count: number;
}

export class TeamPositionUsersStacksDto {
  @ApiProperty({ type: [PositionStackDto] })
  positionStacks: PositionStackDto[];
  @ApiProperty({ type: [TeamUsersDto] })
  users: TeamUsersDto[];
  @ApiProperty()
  recruitStatus: recruit_status;
  @ApiProperty()
  positionId: string;
}

export class UnifiedTeamDto {
  @ApiProperty()
  teamId: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  isPublic: boolean;
  @ApiProperty()
  recruitStatus: recruit_status;
  @ApiProperty()
  proceedType: proceed_type;
  @ApiProperty()
  imgUrl: string;
  @ApiProperty()
  endDate: Date;
  @ApiProperty({ type: [TeamPositionDto] })
  positions: TeamPositionDto[];
}
