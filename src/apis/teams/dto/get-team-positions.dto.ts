import { Expose, Type } from "class-transformer";
import { GetTeamUserDto } from "./get-team-user.dto";
import { recruit_status } from "@postgres-client";

export class StackDto {
  @Expose() stackId: string;
  @Expose() stackName?: string;
  @Expose() imgUrl?: string;
}

export class PositionDto {
  @Expose() positionId: string;
  @Expose() positionName: string;
}

export class GetTeamPositionDto {
  @Expose() teamPositionId: string;
  @Expose() count: number;
  @Expose() recruitStatus: recruit_status;

  @Expose()
  @Type(() => PositionDto)
  positions?: PositionDto;

  @Expose()
  @Type(() => StackDto)
  positionStacks?: StackDto[];

  @Expose()
  @Type(() => GetTeamUserDto)
  teamUsers?: GetTeamUserDto[];
}
