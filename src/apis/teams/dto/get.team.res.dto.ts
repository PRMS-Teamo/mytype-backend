import { member_status, proceed_type, recruit_status } from "@postgres-client";

export class GetTeamResDto {
  teamId: string;
  title?: string;
  content?: string;
  userId?: string;
  isPublic?: boolean;
  recruitStatus?: recruit_status;
  proceedType?: proceed_type;
  imgUrl?: string;
  endDate?: string;
  teamPositions?: Array<{
    teamPositionId: string;
    count: number;
    recruitStatus: recruit_status;
    positions?: {
      positionId: string;
      positionName: string;
    };
    positionStacks?: Array<{
      stacks?: {
        stackId: string;
        stackName?: string;
        imgUrl?: string;
      };
    }>;
    teamUsers?: Array<{
      userId: string;
      nickname?: string;
      imgUrl?: string;
      memberStatus?: member_status;
      isOwner?: boolean;
      message?: string;
    }>;
  }>;

  constructor(data: any) {
    this.teamId = data.id;
    this.title = data.title;
    this.content = data.content;
    this.userId = data.user_id;
    this.isPublic = data.is_public;
    this.recruitStatus = data.recruit_status;
    this.proceedType = data.proceed_type;
    this.imgUrl = data.img || undefined;
    this.endDate = data.end_date || undefined;

    this.teamPositions = data.team_positions?.map((tp) => ({
      teamPositionId: tp.id,
      count: tp.count,
      recruitStatus: tp.recruit_status,
      positions: tp.positions
        ? {
            positionId: tp.positions.id,
            positionName: tp.positions.name,
          }
        : undefined,
      positionStacks: tp.position_stacks?.map((ps) => ({
        stacks: ps.stacks
          ? {
              stackId: ps.stacks.id,
              stackName: ps.stacks.name || undefined,
              imgUrl: ps.stacks.img_url || undefined,
            }
          : undefined,
      })),
      teamUsers: tp.team_users?.map((tu) => ({
        isOwner: tu.is_owner,
        message: tu.message || undefined,
        memberStatus: tu.member_status,
        userId: tu.users.id,
        nickname: tu.users.nickname || undefined,
        imgUrl: tu.users.img_url || undefined,
      })),
    }));
  }
}
