import { Injectable, NotFoundException } from "@nestjs/common";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { UsersService } from "@/apis/users/users.service";
import { NOTFOUND_POSITION, NOTFOUND_TEAM } from "@/constants/errorMessage";
import { Team } from "./entities/team.entity";
import { recruit_status } from "@postgres-client";

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
        is_owner: isOwner,
        member_status: memberStatus,
      },
    });
  }

  async createTeam(userId: string, team: Team) {
    const result = await this.postgresService.$transaction(
      async (tx: PostgresService) => {
        try {
          const {
            teamName,
            content,
            isPublic,
            recruitStatus,
            proceedType,
            imgUrl,
            positions,
          } = team;

          // 1. 팀 생성
          const createdTeam = await tx.teams.create({
            data: {
              user_id: userId,
              title: teamName,
              content,
              is_public: isPublic,
              recruit_status: recruitStatus,
              proceed_type: proceedType,
              img: imgUrl,
            },
          });

          if (!createdTeam) {
            throw new Error("팀 생성 실패");
          }

          // 2. 팀 포지션 생성 (한 번의 createMany 호출)
          const teamPositionsData: {
            team_id: string;
            position_id: string;
            count: number;
            recruit_status: recruit_status;
            status: boolean;
          }[] = [];

          // positions가 null/undefined인 경우 빈 배열로 처리
          if (positions && positions.length > 0) {
            // 각 포지션에 대해 실제 포지션 ID를 찾아서 매핑
            for (const position of positions) {
              if (position.positionName) {
                const actualPosition = await tx.positions.findFirst({
                  where: {
                    name: position.positionName,
                  },
                });

                if (!actualPosition) {
                  throw new Error(
                    `포지션 "${position.positionName}"을 찾을 수 없습니다`,
                  );
                }

                teamPositionsData.push({
                  team_id: createdTeam.id,
                  position_id: actualPosition.id,
                  count: position.count || 0,
                  recruit_status: recruitStatus || "CLOSE",
                  status: true,
                });
              }
            }
          }

          // 팀 생성자 포지션 추가
          const ownerTeamPosition = await tx.positions.findFirst({
            where: {
              name: "팀 생성자",
            },
          });
          if (!ownerTeamPosition) {
            throw new Error("팀 생성자 포지션을 찾을 수 없습니다");
          }
          teamPositionsData.push({
            team_id: createdTeam.id,
            position_id: ownerTeamPosition.id,
            count: 1,
            recruit_status: recruitStatus || "CLOSE",
            status: true,
          });

          // team_positions를 생성하고 생성된 ID들을 가져오기 위해 개별 생성
          const createdTeamPositions: {
            id: string;
            position_name: string;
            position_stacks?: any[];
          }[] = [];

          // 먼저 모든 포지션 정보를 매핑
          const positionNameToStacks = new Map();
          if (positions && positions.length > 0) {
            positions.forEach((position) => {
              if (position.positionName) {
                positionNameToStacks.set(
                  position.positionName,
                  position.positionStacks || [],
                );
              }
            });
          }

          for (const positionData of teamPositionsData) {
            const createdTeamPosition = await tx.team_positions.create({
              data: positionData,
            });

            // position_name을 찾기 위해 positions 테이블에서 조회
            const actualPosition = await tx.positions.findFirst({
              where: { id: positionData.position_id },
            });

            const positionName = actualPosition?.name || "";
            const positionStacks = positionNameToStacks.get(positionName) || [];

            createdTeamPositions.push({
              id: createdTeamPosition.id,
              position_name: positionName,
              position_stacks: positionStacks,
            });
          }

          // 3. 모든 position_stacks 데이터를 한 번에 생성
          const allPositionStacks: {
            team_position_id: string;
            stack_id: string;
          }[] = [];

          createdTeamPositions.forEach((teamPosition) => {
            if (
              teamPosition.position_stacks &&
              teamPosition.position_stacks.length > 0
            ) {
              teamPosition.position_stacks.forEach((stack) => {
                if (stack.stackId) {
                  allPositionStacks.push({
                    team_position_id: teamPosition.id,
                    stack_id: stack.stackId,
                  });
                }
              });
            }
          });

          if (allPositionStacks.length > 0) {
            await tx.position_stacks.createMany({
              data: allPositionStacks,
            });
          }
          // 4. 팀 멤버 생성 (첫 번째 포지션을 팀 생성자 포지션으로 가정)

          // 4. 모든 팀 멤버를 한 번에 생성 (기존 멤버 + 팀 생성자)
          const allTeamMembers: {
            user_id: string;
            team_position_id: string;
            is_owner: boolean;
            member_status: "ON_BOARD";
          }[] = [];

          // 팀 생성자 포지션의 team_position_id 찾기
          const ownerTeamPositionId = createdTeamPositions.find(
            (tp) => tp.position_name === "팀 생성자",
          )?.id;

          if (!ownerTeamPositionId) {
            throw new Error("팀 생성자 포지션을 찾을 수 없습니다");
          }

          // 기존 멤버들 추가
          if (positions && positions.length > 0) {
            positions.forEach((position) => {
              if (position.users && position.users.length > 0) {
                position.users.forEach((user) => {
                  if (user.userId) {
                    allTeamMembers.push({
                      user_id: user.userId,
                      team_position_id: ownerTeamPositionId,
                      is_owner: false,
                      member_status: "ON_BOARD" as const,
                    });
                  }
                });
              }
            });
          }

          // 팀 생성자 추가
          allTeamMembers.push({
            user_id: userId,
            team_position_id: ownerTeamPositionId,
            is_owner: true,
            member_status: "ON_BOARD" as const,
          });

          if (allTeamMembers.length > 0) {
            await tx.team_users.createMany({
              data: allTeamMembers,
            });
          }

          const createdTeamResult = {
            ...team,
            teamId: createdTeam.id,
          };

          return {
            createdTeamResult,
          };
        } catch (error) {
          console.error("팀 생성 중 오류 발생:", error);
          throw error; // 트랜잭션 롤백을 위해 에러를 다시 던짐
        }
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
          await tx.position_stacks.deleteMany({
            where: { team_position_id: pos.id },
          });
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
                  team_position_id: prev.id,
                  stack_id,
                })),
              });
            }

            if (toRemove.length > 0) {
              await tx.position_stacks.deleteMany({
                where: {
                  team_position_id: prev.id,
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
                team_position_id: newTeamPosition.id,
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
          where: { user_id: userId, is_owner: true },
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
              is_owner: true,
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
