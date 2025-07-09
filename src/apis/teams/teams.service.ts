import { Injectable, NotFoundException } from "@nestjs/common";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
// import { CreateTeamDto } from "./dto/create-team.dto";

@Injectable()
export class TeamsService {
  constructor(private prisma: PostgresService) {}

  async createTeam(userId: string, teamInfo: any) {
    const { stacks, need, owner_position_id, ...restTeamInfo } = teamInfo;

    const result = await this.prisma.$transaction(async (tx) => {
      // 1. 팀 생성
      const createdTeam = await tx.teams.create({
        data: {
          user_id: userId,
          ...restTeamInfo,
        },
      });

      const teamId = createdTeam.id;

      // 2. 팀 포지션 생성
      const teamPositionResults = await Promise.all(
        Object.keys(stacks).map(async (positionId) => {
          return tx.team_positions.create({
            data: {
              team_id: teamId,
              position_id: positionId,
              count: need[positionId],
              status: true,
            },
          });
        }),
      );

      // 3. 포지션 ID와 연결된 스택들 등록
      for (let i = 0; i < teamPositionResults.length; i++) {
        const teamPosition = teamPositionResults[i];
        const positionId = teamPosition.position_id;
        const stackIds = stacks[positionId];

        await tx.position_stacks.createMany({
          data: stackIds.map((stackId) => ({
            team_id: teamPosition.id,
            stack_id: stackId,
          })),
        });
      }
      // 이때 owner가 속할 포지션을 지정해야 함

      const ownerTeamPosition = teamPositionResults.find(
        (tp) => tp.position_id === owner_position_id,
      );
      if (!ownerTeamPosition) {
        throw new NotFoundException(
          "owner_position_id와 일치하는 team_position을 찾을 수 없음.",
        );
      }
      await tx.team_users.create({
        data: {
          user_id: userId,
          team_position_id: ownerTeamPosition.id,
          isOwner: true,
          member_status: "ON_BOARD",
        },
      });

      return { message: "팀 생성 성공", teamId };
    });

    return result;
  }

  async updateTeam(userId: string, teamId: string, dto) {
    const { stacks, need, ...restTeamInfo } = dto;
    const transaction = await this.prisma.$transaction(async (tx) => {
      await tx.teams.updateMany({
        where: {
          id: teamId,
          user_id: userId,
        },
        data: {
          ...restTeamInfo,
          updated_at: new Date(),
        },
      });

      await tx.team_positions.deleteMany({
        where: {
          team_id: teamId,
        },
      });

      await tx.team_positions.createMany({
        data: Object.entries(stacks as Record<string, string[]>).flatMap(
          ([position_id, stackList]) =>
            stackList.map((stack_id) => ({
              team_id: teamId,
              position_id,
              stack_id,
              status: true,
              count: need[position_id],
            })),
        ),
        skipDuplicates: true,
      });

      return { message: "팀 정보가 수정되었습니다." };
    });
    return transaction;
  }
}
