export function teamMapper(
  team: Record<string, unknown>,
): Record<string, unknown> {
  return {
    teamId: team.id,
    userId: team.user_id,
    title: team.title,
    content: team.content,
    isPublic: team.is_public,
    recruitStatus: team.recruit_status,
    proceedType: team.proceed_type,
    imgUrl: team.img,
    endDate: team.end_date,
    teamPositions:
      (team.team_positions as Array<Record<string, unknown>> | undefined)?.map(
        (tp) => ({
          users:
            (tp.team_users as Array<Record<string, unknown>> | undefined)?.map(
              (tu) => ({
                isOwner: tu?.is_owner,
                message: tu?.message,
                memberStatus: tu?.member_status,
                userId: (tu?.users as Record<string, unknown> | undefined)?.id,
                nickname: (tu?.users as Record<string, unknown> | undefined)
                  ?.nickname,
                imgUrl: (tu?.users as Record<string, unknown> | undefined)
                  ?.img_url,
              }),
            ) ?? [],
          positionStacks:
            (
              tp.position_stacks as Array<Record<string, unknown>> | undefined
            )?.map((ps) => ({
              stackId: (ps?.stacks as Record<string, unknown> | undefined)?.id,
              stackName: (ps?.stacks as Record<string, unknown> | undefined)
                ?.name,
              imgUrl: (ps?.stacks as Record<string, unknown> | undefined)
                ?.img_url,
            })) ?? [],
          teamPositionId: tp?.id,
          recruitStatus: tp?.recruit_status,
          positions: {
            positionId: (tp?.positions as Record<string, unknown> | undefined)
              ?.id,
            positionName: (tp?.positions as Record<string, unknown> | undefined)
              ?.name,
          },
        }),
      ) ?? [],
  };
}
