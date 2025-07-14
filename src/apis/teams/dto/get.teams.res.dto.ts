import { proceed_type, recruit_status } from "@postgres-client";

export class GetTeamsResDto {
  teamId: string;
  teamName: string;
  content: string;
  userId: string;
  isPublic: boolean;
  recruitStatus: recruit_status;
  proceedType: proceed_type;
  imgUrl?: string;
  teamStacks?: Array<{
    stackId: string;
    stackName?: string;
    imgUrl?: string;
  }>;

  constructor(data: any) {
    this.teamId = data.id;
    this.teamName = data.title;
    this.content = data.content;
    this.userId = data.user_id;
    this.isPublic = data.is_public;
    this.recruitStatus = data.recruit_status;
    this.proceedType = data.proceed_type;
    this.imgUrl = data.img || undefined;

    // 안전하게 flatten + null 체크 + 중복 제거(Optional)
    const allStacks: any[] = [];

    data.team_positions?.forEach((tp: any) => {
      tp.position_stacks?.forEach((ps: any) => {
        const s = ps.stacks;
        if (s) {
          allStacks.push({
            stackId: s.id,
            stackName: s.name || undefined,
            imgUrl: s.img_url || undefined,
          });
        }
      });
    });

    // 중복 스택 제거
    const seen = new Set();
    this.teamStacks = allStacks.filter((stack) => {
      if (seen.has(stack.stackId)) return false;
      seen.add(stack.stackId);
      return true;
    });
  }

  static fromArray(dataList: any[]): GetTeamsResDto[] {
    return dataList.map((data) => new GetTeamsResDto(data));
  }
}
