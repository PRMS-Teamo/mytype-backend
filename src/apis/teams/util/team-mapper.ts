import { UnifiedTeamDto } from "../dto/unified-team.dto";

export function teamMapper(team: any): UnifiedTeamDto {
  return {
    teamId: team.id,
    userId: team.user_id,
    title: team.title,
    content: team.content,
    isPublic: team.is_public,
    recruitStatus: team.recruit_status,
    proceedType: team.proceed_type,
    imgId: team.img_id,
    imgUrl: team.img_url,
    endDate: team.end_date,
    location: team.location,
    startDate: team.start_date,
    startTime: team.start_time,
    endTime: team.end_time,
    meetingLocation: team.meeting_location,
    meetingLink: team.meeting_link,
    bumpedAt: team.bumped_at,
    createdAt: team.created_at,
    updatedAt: team.updated_at,
    positions: team.team_positions.map((tp) => ({
      positionStacks: tp.position_stacks.map((ps) => ({
        stackId: ps.stacks.id,
        stackName: ps.stacks.name,
        imgUrl: ps.stacks.img_url,
      })),
      recruitStatus: tp.recruit_status,
      positionId: tp.positions.id,
      positionName: tp.positions.name,
      count: tp.count,
      currentCount: tp.team_users.length,
    })),
  };
}
