import { Expose, Type } from "class-transformer";
import { proceed_type, recruit_status } from "@postgres-client";
import { GetTeamPositionDto } from "./get-team-positions.dto";

export class GetTeamResDto {
  @Expose() teamId: string;
  @Expose() title?: string;
  @Expose() content?: string;
  @Expose() userId?: string;
  @Expose() isPublic?: boolean;
  @Expose() recruitStatus?: recruit_status;
  @Expose() proceedType?: proceed_type;
  @Expose() imgUrl?: string;
  @Expose() endDate?: string;

  @Expose()
  @Type(() => GetTeamPositionDto)
  teamPositions?: GetTeamPositionDto[];
}
