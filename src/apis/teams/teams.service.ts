import { Injectable, NotFoundException } from "@nestjs/common";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { UsersService } from "@/apis/users/users.service";
import { NOTFOUND_POSITION, NOTFOUND_TEAM } from "@/constants/errorMessage";

@Injectable()
export class TeamsService {
  constructor(
    private postgresService: PostgresService,
    private readonly usersService: UsersService,
  ) {}
  async createdTeamTransaction(tx: PostgresService, userId, data) {
    return tx.teams.create({
      data: {
        user_id: userId,
        ...data,
      },
    });
  }

  async createTeamMemberTransaction(
    tx: PostgresService,
    userId,
    teamPositionId,
    isOwner,
    memberStatus,
  ) {
    return tx.team_users.create({
      data: {
        user_id: userId,
        team_position_id: teamPositionId,
        isOwner,
        member_status: memberStatus,
      },
    });
  }

  async createTeam(userId: string, teamInfo: any) {
    const { stacks, need, owner_position_id, ...restTeamInfo } = teamInfo;

    const result = await this.postgresService.$transaction(
      async (tx: PostgresService) => {
        const createdTeam = await this.createdTeamTransaction(
          tx,
          userId,
          restTeamInfo,
        );
        const teamId = createdTeam.id;
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
        const ownerTeamPosition = teamPositionResults.find(
          (tp) => tp.position_id === owner_position_id,
        );
        if (!ownerTeamPosition) {
          throw new NotFoundException({ NOTFOUND_POSITION });
        }
        await this.createTeamMemberTransaction(
          tx,
          userId,
          ownerTeamPosition.id,
          true,
          "ON_BOARD",
        );
        return { message: "팀 생성 성공", teamId };
      },
    );
    return result;
  }

  async updateTeam(userId: string, teamId: string, dto: any) {
    const { stacks, need, new_owner, ...restTeamInfo } = dto;

    return await this.postgresService.$transaction(async (tx) => {
      if (Object.keys(restTeamInfo).length > 0) {
        await tx.teams.update({
          where: { id: teamId, user_id: userId },
          data: {
            ...restTeamInfo,
            updated_at: new Date(),
          },
        });
      }

      if (stacks && need) {
        const prevPositions = await tx.team_positions.findMany({
          where: { team_id: teamId },
          include: { position_stacks: true },
        });

        const incomingPositionIds = Object.keys(stacks);

        const toDelete = prevPositions.filter(
          (pos) => !incomingPositionIds.includes(pos.position_id),
        );

        for (const pos of toDelete) {
          await tx.position_stacks.deleteMany({ where: { team_id: pos.id } });
          await tx.team_users.deleteMany({
            where: { team_position_id: pos.id },
          });
          await tx.team_positions.delete({ where: { id: pos.id } });
        }

        for (const positionId of incomingPositionIds) {
          const stackList = stacks[positionId];
          const prev = prevPositions.find((p) => p.position_id === positionId);

          if (prev) {
            if (prev.count !== need[positionId]) {
              await tx.team_positions.update({
                where: { id: prev.id },
                data: { count: need[positionId], updated_at: new Date() },
              });
            }

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

      if (new_owner) {
        const newOwnerPosition = await tx.team_positions.findFirst({
          where: { team_id: teamId, position_id: new_owner },
        });

        if (!newOwnerPosition) {
          throw new NotFoundException({ NOTFOUND_POSITION });
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

  async addTeamMember(teamPositionId: string, newMemberId: string) {
    console.log(teamPositionId, newMemberId);
    await this.postgresService.$transaction(async (tx: PostgresService) => {
      await this.createTeamMemberTransaction(
        tx,
        newMemberId,
        teamPositionId,
        false,
        "ON_BOARD",
      );
      await this.usersService.updateJoinStatusByUuid(newMemberId, true);
    });
    return { message: "hello" };
  }

  async deleteTeamMember(memberId: string) {
    const deleteMemberTransaction = await this.postgresService.$transaction(
      async (tx: PostgresService) => {
        await this.usersService.updateJoinStatusByUuid(memberId, false, tx);

        const teamPositionId = await this.getTeamPositionIdByUserId(memberId);
        const deleteMember = await tx.team_users.delete({
          where: {
            user_id_team_position_id: {
              user_id: memberId,
              team_position_id: teamPositionId,
            },
          },
        });
        return deleteMember;
      },
    );
    return deleteMemberTransaction;
  }

  async getTeamPositionIds(teamId: string) {
    const positions = await this.postgresService.team_positions.findMany({
      where: {
        team_id: teamId,
      },
      select: {
        id: true,
      },
    });
    if (!positions) {
      throw new NotFoundException({ NOTFOUND_POSITION });
    }
    return positions.map((pos) => pos.id);
  }

  async getTeamPositionIdByUserId(userId: string) {
    const result = await this.postgresService.team_users.findFirst({
      where: {
        user_id: userId,
      },
      select: {
        team_position_id: true,
      },
    });
    if (!result) {
      throw new NotFoundException({ NOTFOUND_POSITION });
    }
    return result.team_position_id;
  }

  async getTeamIdByUserId(userId: string) {
    const team = await this.postgresService.teams.findFirst({
      where: {
        user_id: userId,
      },
      select: {
        id: true,
      },
    });
    if (!team) {
      throw new NotFoundException({ NOTFOUND_TEAM });
    }
    return team.id;
  }

  async getTeamOwnerIdByTeamId(teamId: string) {
    const teamInfo = await this.postgresService.teams.findFirst({
      where: {
        id: teamId,
      },
    });
    if (!teamInfo) {
      throw new NotFoundException({ NOTFOUND_TEAM });
    }
    return teamInfo.user_id;
  }

  async getTeamMembers(teamId: string) {
    const teamPositionIds = await this.getTeamPositionIds(teamId);
    const teamMembers = await this.postgresService.team_users.findMany({
      where: {
        team_position_id: {
          in: teamPositionIds,
        },
      },
    });
    return teamMembers;
  }
}
