import {
  proceed_type,
  recruit_status,
  stacks,
  team_positions,
  teams,
  positions,
} from "@postgres-client";

export class TeamStack {
  constructor(stack: stacks) {
    this.stackId = stack.id || "";
    this.stackName = stack.name || "";
    this.imgUrl = stack.img_url || "";
  }
  stackId: string;
  stackName: string;
  imgUrl: string;
}

export class TeamPosition {
  constructor(
    teamPosition: team_positions,
    position?: positions,
    stacks?: TeamStack[],
  ) {
    this.positionId = position?.id || "";
    this.positionName = position?.name || "";
    this.count = teamPosition.count || 0;
    this.positionStacks = stacks;
    this.recruitStatus = teamPosition.recruit_status || "CLOSE";
  }
  positionId?: string;
  positionName?: string;
  count?: number;
  positionStacks?: TeamStack[];
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
    this.teamPositions = teamPositions;
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
  teamPositions?: TeamPosition[];
}
