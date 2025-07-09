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

  async updateTeam(userId: string, teamId: string, dto: any) {
    const { stacks, need, new_owner, ...restTeamInfo } = dto;

    return await this.prisma.$transaction(async (tx) => {
      // 1. 팀 자체 정보만 수정
      if (Object.keys(restTeamInfo).length > 0) {
        await tx.teams.update({
          where: { id: teamId, user_id: userId },
          data: {
            ...restTeamInfo,
            updated_at: new Date(),
          },
        });
      }

      // 2. 포지션/스택이 주어진 경우만 처리
      if (stacks && need) {
        const prevPositions = await tx.team_positions.findMany({
          where: { team_id: teamId },
          include: { position_stacks: true },
        });

        const incomingPositionIds = Object.keys(stacks);

        // 삭제 대상 찾기
        const toDelete = prevPositions.filter(
          (pos) => !incomingPositionIds.includes(pos.position_id),
        );

        // 삭제 처리
        for (const pos of toDelete) {
          await tx.position_stacks.deleteMany({ where: { team_id: pos.id } });
          await tx.team_users.deleteMany({
            where: { team_position_id: pos.id },
          });
          await tx.team_positions.delete({ where: { id: pos.id } });
        }

        // 업데이트/삽입
        for (const positionId of incomingPositionIds) {
          const stackList = stacks[positionId];
          const prev = prevPositions.find((p) => p.position_id === positionId);

          if (prev) {
            // count 값만 업데이트
            if (prev.count !== need[positionId]) {
              await tx.team_positions.update({
                where: { id: prev.id },
                data: { count: need[positionId], updated_at: new Date() },
              });
            }

            // 스택 비교 후 추가/삭제
            const oldStackIds = prev.position_stacks.map((s) => s.stack_id);
            const toAdd = stackList.filter((s) => !oldStackIds.includes(s));
            const toRemove = oldStackIds.filter((s) => !stackList.includes(s));

            if (toAdd.length > 0) {
              await tx.position_stacks.createMany({
                data: toAdd.map((stack_id) => ({
                  team_id: prev.id,
                  stack_id,
                })),
              });
            }

            if (toRemove.length > 0) {
              await tx.position_stacks.deleteMany({
                where: {
                  team_id: prev.id,
                  stack_id: { in: toRemove },
                },
              });
            }
          } else {
            // 새 포지션 삽입
            const newTeamPosition = await tx.team_positions.create({
              data: {
                team_id: teamId,
                position_id: positionId,
                count: need[positionId],
                status: true,
              },
            });

            await tx.position_stacks.createMany({
              data: stackList.map((stack_id) => ({
                team_id: newTeamPosition.id,
                stack_id,
              })),
            });
          }
        }
      }

      // 3. 팀장 포지션 변경 (선택)
      if (new_owner) {
        const newOwnerPosition = await tx.team_positions.findFirst({
          where: { team_id: teamId, position_id: new_owner },
        });

        if (!newOwnerPosition) {
          throw new NotFoundException("지정된 포지션이 존재하지 않습니다.");
        }

        const current = await tx.team_users.findFirst({
          where: { user_id: userId, isOwner: true },
        });

        if (current) {
          await tx.team_users.update({
            where: {
              user_id_team_position_id: {
                user_id: userId,
                team_position_id: current.team_position_id,
              },
            },
            data: {
              team_position_id: newOwnerPosition.id,
              updated_at: new Date(),
            },
          });
        } else {
          await tx.team_users.create({
            data: {
              user_id: userId,
              team_position_id: newOwnerPosition.id,
              isOwner: true,
              member_status: "ON_BOARD",
            },
          });
        }
      }
      return { message: "팀 정보가 수정되었습니다." };
    });
  }
}
