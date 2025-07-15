import {
  proceed_type,
  recruit_status,
  stacks,
  team_positions,
  teams,
  positions,
  users,
} from "@postgres-client";
import { team_users } from "@postgres-client";
import { member_status } from "@postgres-client";

export class TeamStack {
  constructor(stack: stacks) {
    this.stackId = stack.id || "";
    this.stackName = stack.name || "";
    this.imgUrl = stack.img_url || "";
  }
  stackId: string;
  stackName: string;
  imgUrl: string;
  status?: boolean;
}

export class TeamUser {
  constructor(teamUser: team_users, user: users) {
    this.userId = teamUser.user_id || "";
    this.nickname = user.nickname || "";
    this.isOwner = teamUser.is_owner || false;
    this.message = teamUser.message || "";
    this.profileImg = user.img_url || "";
    this.memberStatus = teamUser.member_status || "ON_BOARD";
  }
  userId: string;
  nickname: string;
  isOwner: boolean;
  message: string;
  profileImg: string;
  memberStatus: member_status;
}

export class TeamPosition {
  constructor(
    teamPosition: team_positions,
    position?: positions,
    stacks?: TeamStack[],
    users?: TeamUser[],
  ) {
    this.positionId = teamPosition.id || "";
    this.positionName = position?.name || "";
    this.count = teamPosition.count || 0;
    this.positionStacks = stacks;
    this.users = users;
    this.recruitStatus = teamPosition.recruit_status || "CLOSE";
  }
  positionId?: string;
  positionName?: string;
  count?: number;
  positionStacks?: TeamStack[];
  users?: TeamUser[];
  recruitStatus?: recruit_status;
}

export class Team {
  constructor(team: teams, teamPositions: TeamPosition[]) {
    this.teamId = team.id || "";
    this.title = team.title || "";
    this.content = team.content || "";
    this.userId = team.user_id || "";
    this.endDate = team.end_date ? team.end_date.toISOString() : "";
    this.isPublic = team.is_public || false;
    this.recruitStatus = team.recruit_status || "OPEN";
    this.proceedType = team.proceed_type || "ONLINE";
    this.imgUrl = team.img || "";
    this.positions = teamPositions;
  }
  teamId?: string;
  title?: string;
  content?: string;
  userId?: string;
  isPublic?: boolean;
  recruitStatus?: recruit_status;
  proceedType?: proceed_type;
  imgUrl?: string;
  endDate?: string;
  positions?: TeamPosition[];
}
