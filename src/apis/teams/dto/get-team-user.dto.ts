import { Expose } from "class-transformer";
import { member_status } from "@postgres-client";

export class GetTeamUserDto {
  @Expose() isOwner?: boolean;
  @Expose() memberStatus?: member_status;
  @Expose() message?: string;

  @Expose() userId?: string;
  @Expose() nickname?: string;
  @Expose() imgUrl?: string;
}
