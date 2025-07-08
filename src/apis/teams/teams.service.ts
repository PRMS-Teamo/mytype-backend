import { Injectable } from "@nestjs/common";
import { PostgresService } from "@/prisma/postgres/postgres.service";

@Injectable()
export class TeamsService {
  constructor(private prisma: PostgresService) {}

  async createTeam(userId: string, teamInfo) {
    const { stacks, need, ...restTeamInfo } = teamInfo;
    const createTeamTransaction = await this.prisma.$transaction(async (tx) => {
      // step1. 팀 정보 생성
      const createTeam = await tx.teams.create({
        data: {
          user_id: userId,
          ...restTeamInfo,
        },
      });
      const teamId = createTeam.id;

      // step2. stack_positions 설정
      await tx.team_stack_positions.createMany({
        data: Object.entries(stacks as Record<string, string[]>).flatMap(
          ([position_id, stackList]) => {
            return stackList.map((stack_id) => ({
              team_id: teamId,
              position_id,
              stack_id,
              status: true,
              count: need[position_id],
            }));
          },
        ),
      });

      return { message: "팀 정상 생성" };
    });
    return createTeamTransaction;
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

      await tx.team_stack_positions.deleteMany({
        where: {
          team_id: teamId,
        },
      });

      await tx.team_stack_positions.createMany({
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
