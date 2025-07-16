import { Expose } from "class-transformer";

export class GetTeamUserInfoDto {
  @Expose() userId: string;
  @Expose() nickname?: string;
  @Expose() imgUrl?: string;
}
