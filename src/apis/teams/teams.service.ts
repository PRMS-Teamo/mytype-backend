import { Injectable, NotFoundException } from "@nestjs/common";
import {
  PostgresService,
  TxClient,
} from "@/infrastructure/database/postgres/postgres.service";
import { UsersService } from "@/apis/users/users.service";
import { NOTFOUND_POSITION, NOTFOUND_TEAM } from "@/constants/errorMessage";
import { member_status, recruit_status } from "@postgres-client";
import { UnifiedTeamDto, TeamPositionDto } from "./dto/unified-team.dto";
import { teamMapper } from "./util/team-mapper";

@Injectable()
export class TeamsService {
  constructor(
    private postgresService: PostgresService,
    private readonly usersService: UsersService,
  ) {}
  private isPostgresService(
    tx: PostgresService | TxClient,
  ): tx is PostgresService {
    return typeof (tx as PostgresService).$transaction === "function";
  }
  async getTeams(skip?: number, take?: number) {
    const teams = await this.postgresService.teams.findMany({
      where: { is_public: true, recruit_status: "OPEN" },
      select: {
        id: true,
        title: true,
        content: true,
        user_id: true,
        is_public: true,
        recruit_status: true,
        proceed_type: true,
        img: true,
        end_date: true,
        bumped_at: true,
        created_at: true,
        updated_at: true,
        team_positions: {
          select: {
            count: true,
            recruit_status: true,
            positions: { select: { id: true, name: true } },
            position_stacks: {
              select: {
                stacks: {
                  select: {
                    id: true,
                    name: true,
                    img_url: true,
                  },
                },
              },
            },
            team_users: {
              where: {
                member_status: "ON_BOARD",
              },
              select: {
                user_id: true,
              },
            },
          },
        },
      },
      ...(skip !== undefined && take !== undefined && { skip, take }),
      orderBy: [{ bumped_at: "desc" }],
    });

    return teams.map((team) => {
      const mappedTeam = teamMapper(team);
      const allStacks = new Map<
        string,
        { stackId: string; stackName: string | null; stackImg: string }
      >();

      team.team_positions.forEach((teamPosition) => {
        teamPosition.position_stacks.forEach((positionStack) => {
          const stack = positionStack.stacks;
          if (stack && !allStacks.has(stack.id)) {
            allStacks.set(stack.id, {
              stackId: stack.id,
              stackName: stack.name,
              stackImg: stack.img_url,
            });
          }
        });
      });

      const uniqueStacks = Array.from(allStacks.values());
      const mappedTeamWithoutPositionStacks = {
        ...mappedTeam,
        positions: mappedTeam.positions.map((position) => ({
          ...position,
          positionStacks: [],
        })),
      };
      return {
        ...mappedTeamWithoutPositionStacks,
        stacks: uniqueStacks,
      };
    });
  }

  async getTeam(
    teamId: string,
    tx?: PostgresService | TxClient,
  ): Promise<UnifiedTeamDto> {
    const team = await (tx || this.postgresService).teams.findUnique({
      where: { id: teamId },
      select: {
        id: true,
        title: true,
        content: true,
        user_id: true,
        is_public: true,
        recruit_status: true,
        proceed_type: true,
        img: true,
        end_date: true,
        location: true,
        start_date: true,
        start_time: true,
        end_time: true,
        meeting_location: true,
        meeting_link: true,
        bumped_at: true,
        created_at: true,
        updated_at: true,
        team_positions: {
          select: {
            id: true,
            count: true,
            recruit_status: true,
            positions: { select: { id: true, name: true } },
            position_stacks: {
              select: {
                stacks: {
                  select: {
                    id: true,
                    name: true,
                    img_url: true,
                  },
                },
              },
            },
            team_users: {
              where: {
                member_status: "ON_BOARD",
              },
              select: {
                user_id: true,
              },
            },
          },
        },
      },
    });
    if (!team) throw new NotFoundException("Team not found");

    return teamMapper(team);
  }

  async getTeamByUserId(
    userId: string,
    tx?: PostgresService | TxClient,
  ): Promise<UnifiedTeamDto> {
    const team = await (tx || this.postgresService).teams.findFirst({
      where: { user_id: userId },
      select: {
        id: true,
        title: true,
        content: true,
        user_id: true,
        is_public: true,
        recruit_status: true,
        proceed_type: true,
        img: true,
        end_date: true,
        location: true,
        start_date: true,
        start_time: true,
        end_time: true,
        meeting_location: true,
        meeting_link: true,
        bumped_at: true,
        created_at: true,
        updated_at: true,
        team_positions: {
          select: {
            id: true,
            count: true,
            recruit_status: true,
            positions: { select: { id: true, name: true } },
            position_stacks: {
              select: {
                stacks: {
                  select: {
                    id: true,
                    name: true,
                    img_url: true,
                  },
                },
              },
            },
            team_users: {
              where: {
                member_status: "ON_BOARD",
              },
              select: {
                user_id: true,
              },
            },
          },
        },
      },
    });
    if (!team) throw new NotFoundException("Team not found");

    return teamMapper(team);
  }

  async createTeam(
    userId: string,
    team: UnifiedTeamDto,
  ): Promise<UnifiedTeamDto> {
    const teamCheck = await this.postgresService.teams.findFirst({
      where: {
        user_id: userId,
        recruit_status: "OPEN",
      },
    });
    if (teamCheck) {
      throw new Error("하나의 팀만 생성할 수 있습니다.");
    }
    try {
      const createdResult = await this.postgresService.$transaction(
        async (tx: PostgresService) => {
          const {
            title,
            content,
            isPublic,
            recruitStatus,
            proceedType,
            imgId,
            meetingLocation,
            meetingLink,
            positions,
            endDate,
            location,
            startDate,
            startTime,
            endTime,
          } = team;

          const createdTeam = await tx.teams.create({
            data: {
              user_id: userId,
              title,
              content,
              is_public: isPublic ?? true,
              recruit_status: recruitStatus ?? "OPEN",
              proceed_type: proceedType ?? "ONLINE",
              img: imgId ?? undefined,
              end_date: endDate ? new Date(endDate) : undefined,
              location: location ? location : undefined,
              start_date: startDate ? new Date(startDate) : undefined,
              start_time: startTime ? new Date(startTime) : undefined,
              end_time: endTime ? new Date(endTime) : undefined,
              meeting_location: meetingLocation ? meetingLocation : undefined,
              meeting_link: meetingLink ? meetingLink : undefined,
            },
          });
          console.log("createdTeam", createdTeam);

          const teamCreatorPosition = await tx.positions.findFirst({
            where: { name: "팀 생성자" },
          });
          console.log("teamCreatorPosition", teamCreatorPosition);
          if (!teamCreatorPosition) {
            throw new Error("팀 생성자 포지션을 찾을 수 없습니다.");
          }

          const allTeamPositions = [
            ...positions,
            {
              positionId: teamCreatorPosition.id,
              positionName: teamCreatorPosition.name,
              count: 1,
              recruitStatus: "CLOSE",
              positionStacks: [],
            },
          ];
          console.log("allTeamPositions", allTeamPositions);
          for (const position of allTeamPositions) {
            const createdTeamPosition = await tx.team_positions.create({
              data: {
                team_id: createdTeam.id,
                position_id: position.positionId,
                count: position.count,
                recruit_status: position.recruitStatus as recruit_status,
                status: true,
              },
            });
            console.log("createdTeamPosition", createdTeamPosition);
            if (position.positionStacks && position.positionStacks.length > 0) {
              await tx.position_stacks.createMany({
                data: position.positionStacks.map((stack) => ({
                  team_position_id: createdTeamPosition.id,
                  stack_id: stack.stackId,
                })),
              });
            }
            console.log("position", position);
            if (position.positionName === "팀 생성자") {
              await tx.team_users.create({
                data: {
                  user_id: userId,
                  team_position_id: createdTeamPosition.id,
                  is_owner: true,
                  member_status: "ON_BOARD",
                },
              });

              await tx.users.update({
                where: { id: userId },
                data: {
                  is_public: false,
                  join_status: true,
                },
              });
            }
          }
          console.log("===================팀 생성 종료===============");

          const result = await this.getTeamByUserId(userId, tx);
          console.log("====================result\n", result);
          return result;
        },
      );

      return createdResult;
    } catch (error) {
      console.log("===================팀 생성 실패===============");
      console.log("error", error);
      throw error;
    }
  }

  async patchTeam(
    userId: string,
    updateTeamDto: UnifiedTeamDto,
  ): Promise<UnifiedTeamDto> {
    const {
      title,
      content,
      isPublic,
      recruitStatus,
      proceedType,
      imgId,
      endDate,
      positions,
      startDate,
      startTime,
      endTime,
      meetingLocation,
      meetingLink,
    } = updateTeamDto;

    return await this.postgresService.$transaction(
      async (tx: PostgresService) => {
        const team = await this.getTeamByUserId(userId, tx);

        if (!team) {
          throw new NotFoundException({
            message: NOTFOUND_TEAM,
            error: "TEAM_NOT_FOUND",
            statusCode: 404,
          });
        }

        const teamId = team.teamId;
        const prevPositions = team.positions;
        console.log("===================prevPositions===================");
        console.log("teamId", teamId);
        console.log("prevPositions", prevPositions);
        console.log("title", title);
        console.log("content", content);
        console.log("isPublic", isPublic);
        console.log("recruitStatus", recruitStatus);
        console.log("proceedType", proceedType);
        console.log("imgId", imgId);
        console.log("endDate", endDate);

        let incomingPositions: TeamPositionDto[] = [];
        if (positions && positions.length > 0) {
          incomingPositions = positions.map((p) => ({
            positionId: p.positionId,
            positionName: p.positionName,
            count: p.count,
            recruitStatus: p.recruitStatus,
            positionStacks: p.positionStacks,
          }));

          const toDelete = prevPositions.filter(
            (pos) =>
              !incomingPositions.some(
                (p) => p.positionId === pos.positionId && p.positionId !== "",
              ),
          );
          if (toDelete.length > 0) {
            for (const pos of toDelete) {
              await this.deleteTeamPositions(teamId, [pos.positionId], tx);
            }
          }

          const toCreate = incomingPositions.filter(
            (pos) =>
              !prevPositions.some((p) => p.positionId === pos.positionId),
          );
          console.log("===================toCreate===================");
          if (toCreate.length > 0) {
            console.log("===================toCreate===================");
            console.log("toCreate", toCreate);
            console.log("teamId", teamId);
            console.log(
              "=================================positionIDs",
              toCreate.map((p) => p.positionId),
            );
            for (const pos of toCreate) {
              // 2. team_positions에 추가
              const createdTeamPosition = await tx.team_positions.create({
                data: {
                  team_id: teamId,
                  position_id: pos.positionId,
                  count: pos.count ?? 0,
                  recruit_status: pos.recruitStatus ?? "OPEN",
                  status: true,
                },
              });
              // 3. position_stacks에 스택 추가
              if (pos.positionStacks && pos.positionStacks.length > 0) {
                await tx.position_stacks.createMany({
                  data: pos.positionStacks.map((stack) => ({
                    team_position_id: createdTeamPosition.id,
                    stack_id: stack.stackId,
                  })),
                });
              }
            }
          }
          console.log("===================toUpdate===================");
          console.log("teamId", teamId);
          console.log("incomingPositions", incomingPositions);
          console.log("prevPositions", prevPositions);

          const toUpdatePositionStacks = incomingPositions.filter(
            (incoming) => {
              const prev = prevPositions.find(
                (p) => p.positionId === incoming.positionId,
              );

              if (!prev) return false;

              // 포지션 아이디 별 로 스택 아이디 집합 비교
              // stackId 집합이 달라졌는지 확인
              const incomingStackIds = new Set(
                incoming.positionStacks.map((s) => s.stackId),
              );
              const prevStackIds = new Set(
                prev.positionStacks.map((s) => s.stackId),
              );
              const stackChanged =
                incomingStackIds.size !== prevStackIds.size ||
                [...incomingStackIds].some((id) => !prevStackIds.has(id)) ||
                [...prevStackIds].some((id) => !incomingStackIds.has(id)) ||
                incoming.count !== prev.count ||
                incoming.recruitStatus !== prev.recruitStatus;

              if (stackChanged) {
                return true;
              }
            },
          );

          if (toUpdatePositionStacks.length > 0) {
            for (const pos of toUpdatePositionStacks) {
              await this.updateTeamPositions(teamId, [pos], tx);
            }
          }
        }

        await tx.teams.update({
          where: { id: teamId },
          data: {
            title: title,
            content: content,
            is_public: isPublic ?? true,
            recruit_status: recruitStatus ?? "OPEN",
            proceed_type: proceedType ?? "ONLINE",
            img: imgId ?? undefined,
            end_date: endDate
              ? new Date(endDate)
              : new Date(new Date().setHours(23, 59, 59, 999)),
            start_date: startDate ? new Date(startDate) : undefined,
            start_time: startTime ? new Date(startTime) : undefined,
            end_time: endTime ? new Date(endTime) : undefined,
            meeting_location: meetingLocation ? meetingLocation : undefined,
            meeting_link: meetingLink ? meetingLink : undefined,
            updated_at: new Date(),
          },
        });
        return this.getTeamByUserId(userId, tx);
      },
    );
  }

  async getTeamMembers(userId: string) {
    const findTeamId = await this.postgresService.team_users.findFirst({
      where: {
        user_id: userId,
      },
      select: {
        team_position_id: true,
        member_status: true,
        team_positions: {
          select: {
            team_id: true,
          },
        },
      },
    });

    const teamId = findTeamId?.team_positions.team_id;

    if (!teamId) {
      throw new NotFoundException({
        message: NOTFOUND_TEAM,
        error: "TEAM_NOT_FOUND",
        statusCode: 404,
      });
    }
    const team = await this.postgresService.teams.findUnique({
      where: { id: teamId },
      select: {
        id: true,
        team_positions: {
          select: {
            id: true,
            positions: { select: { id: true, name: true } },
            team_users: {
              select: {
                users: {
                  select: {
                    id: true,
                    name: true,
                    img_id: true,
                  },
                },
              },
            },
            position_stacks: {
              select: {
                stacks: {
                  select: {
                    id: true,
                    name: true,
                    img_url: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!team) {
      throw new NotFoundException({
        message: NOTFOUND_TEAM,
        error: "TEAM_NOT_FOUND",
        statusCode: 404,
      });
    }

    const result = {
      [team.id]: team.team_positions.map((pos) => ({
        positionId: pos.positions.id,
        positionName: pos.positions.name,
        users: pos.team_users.map((tu) => ({
          userId: tu.users.id,
          userName: tu.users.name,
          imgId: tu.users.img_id,
        })),
        stacks: pos.position_stacks.map((ps) => ({
          stackId: ps.stacks.id,
          stackName: ps.stacks.name,
          stackImg: ps.stacks.img_url,
        })),
      })),
    };

    return result;
  }

  async finishTeam(userId: string) {
    return await this.postgresService.$transaction(
      async (tx: PostgresService) => {
        if (!userId) {
          throw new NotFoundException({
            message: NOTFOUND_TEAM,
            error: "TEAM_NOT_FOUND",
            statusCode: 404,
          });
        }
        const team = await tx.teams.findFirst({
          where: {
            user_id: userId,
          },
          select: {
            id: true,
          },
        });
        if (!team?.id) {
          throw new NotFoundException({
            message: NOTFOUND_TEAM,
            error: "TEAM_NOT_FOUND",
            statusCode: 404,
          });
        }
        const teamId = team.id;
        const teamPositions = await tx.team_positions.findMany({
          where: {
            team_id: teamId,
          },
          select: {
            id: true,
            team_users: {
              where: {
                users: {
                  join_status: true,
                },
              },
              select: {
                user_id: true,
                users: {
                  select: {
                    id: true,
                  },
                },
              },
            },
          },
        });
        if (teamPositions.length === 0) {
          throw new NotFoundException({ NOTFOUND_POSITION });
        }
        for (const teamPosition of teamPositions) {
          await tx.team_positions.update({
            where: {
              id: teamPosition.id,
            },
            data: {
              status: false,
              recruit_status: "CLOSE",
            },
          });
          await tx.team_users.updateMany({
            where: {
              team_position_id: teamPosition.id,
            },
            data: {
              member_status: "OFF_BOARD",
            },
          });
          await tx.users.updateMany({
            where: {
              id: { in: teamPosition.team_users.map((user) => user.user_id) },
            },
            data: {
              join_status: false,
            },
          });
        }
        await tx.teams.update({
          where: {
            id: teamId,
          },
          data: {
            recruit_status: "CLOSE",
          },
        });

        return { message: "팀 완료" };
      },
    );
  }

  async offBoard(userId: string, memberId: string, teamId: string) {
    if (userId === memberId) {
      return await this.postgresService.$transaction(
        async (tx: PostgresService) => {
          await tx.team_users.update({
            where: {
              user_id_team_position_id: {
                user_id: memberId,
                team_position_id: teamId,
              },
            },
            data: {
              member_status: "REQUESTED_OFF_BOARD",
            },
          });
          return { message: "팀 탈퇴 요청이 완료되었습니다." };
        },
      );
    } else if (userId !== memberId) {
      return await this.postgresService.$transaction(
        async (tx: PostgresService) => {
          await tx.team_users.update({
            where: {
              user_id_team_position_id: {
                user_id: memberId,
                team_position_id: teamId,
              },
            },
            data: {
              member_status: "OFF_BOARD",
            },
          });

          await this.usersService.updateJoinStatusByUuid(memberId, false, tx);
          return { message: "팀 멤버가 팀에서 제외되었습니다." };
        },
      );
    } else {
      throw new NotFoundException({
        message: NOTFOUND_TEAM,
        error: "TEAM_NOT_FOUND",
        statusCode: 404,
      });
    }
  }

  async deleteTeamMember(userId: string, memberId: string) {
    const deleteMemberTransaction = await this.postgresService.$transaction(
      async (tx: PostgresService) => {
        const deletingMember = await tx.team_users.findFirst({
          where: {
            user_id: memberId,
          },
          select: {
            team_position_id: true,
            users: {
              select: {
                id: true,
              },
            },
          },
        });

        if (!deletingMember) {
          throw new NotFoundException({
            message: NOTFOUND_TEAM,
            error: "TEAM_NOT_FOUND",
            statusCode: 404,
          });
        }

        const deletedResult = await tx.team_users.delete({
          where: {
            user_id_team_position_id: {
              user_id: memberId,
              team_position_id: deletingMember.team_position_id,
            },
          },
        });

        console.log("deletedResult", deletedResult);

        await this.usersService.updateJoinStatusByUuid(memberId, false, tx);

        return deletedResult;
      },
    );
    return deleteMemberTransaction;
  }

  async getTeamPositionIdByUserId(
    userId: string,
    tx?: PostgresService | TxClient,
  ) {
    const result = await (tx || this.postgresService).team_users.findFirst({
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

  async addTeamMember(
    teamPositionId: string,
    newMemberId: string,
  ): Promise<{ message: string }> {
    await this.postgresService.$transaction(async (tx: PostgresService) => {
      await tx.team_users.create({
        data: {
          user_id: newMemberId,
          team_position_id: teamPositionId,
          is_owner: false,
          member_status: "ON_BOARD",
        },
      });
      await this.usersService.updateJoinStatusByUuid(newMemberId, true, tx);
    });
    return { message: "A new member has been added to the team." };
  }

  async createTeamUsers(
    teamPositionId: string,
    newMemberIds: string[],
    tx?: PostgresService | TxClient,
  ) {
    if (tx && !this.isPostgresService(tx)) {
      await tx.team_users.createMany({
        data: newMemberIds.map((id) => ({
          user_id: id,
          team_position_id: teamPositionId,
          is_owner: false,
          member_status: "ON_BOARD" as member_status,
        })),
      });
      return;
    }

    await (tx || this.postgresService).$transaction(
      async (tx: PostgresService) => {
        await tx.team_users.createMany({
          data: newMemberIds.map((id) => ({
            user_id: id,
            team_position_id: teamPositionId,
            is_owner: false,
            member_status: "ON_BOARD" as member_status,
          })),
        });
      },
    );
  }

  async deleteTeamUsers(
    teamPositionId: string,
    userIds: string[],
    tx?: PostgresService | TxClient,
  ) {
    if (tx && !this.isPostgresService(tx)) {
      await tx.team_users.deleteMany({
        where: { team_position_id: teamPositionId, user_id: { in: userIds } },
      });
      return;
    }
    await (tx || this.postgresService).$transaction(
      async (tx: PostgresService) => {
        await tx.team_users.deleteMany({
          where: {
            team_position_id: teamPositionId,
            user_id: { in: userIds },
          },
        });
      },
    );
  }

  async createPositionStacks(
    teamPositionId: string,
    stackIds: string[],
    tx?: PostgresService | TxClient,
  ) {
    if (tx && !this.isPostgresService(tx)) {
      await tx.position_stacks.createMany({
        data: stackIds.map((stackId) => ({
          team_position_id: teamPositionId,
          stack_id: stackId,
        })),
      });
      return;
    }

    await (tx || this.postgresService).$transaction(
      async (tx: PostgresService) => {
        await tx.position_stacks.createMany({
          data: stackIds.map((stackId) => ({
            team_position_id: teamPositionId,
            stack_id: stackId,
          })),
        });
      },
    );
  }

  async deletePositionStacks(
    teamPositionId: string,
    stackIds: string[],
    tx?: PostgresService | TxClient,
  ) {
    if (tx && !this.isPostgresService(tx)) {
      await tx.position_stacks.deleteMany({
        where: {
          team_position_id: teamPositionId,
          stack_id: { in: stackIds },
        },
      });
      return;
    }

    await (tx || this.postgresService).$transaction(
      async (tx: PostgresService) => {
        await tx.position_stacks.deleteMany({
          where: {
            team_position_id: teamPositionId,
            stack_id: { in: stackIds },
          },
        });
      },
    );
  }

  async deleteTeamPositions(
    teamId: string,
    positionIds: string[],
    tx?: PostgresService | TxClient,
  ) {
    if (tx && !this.isPostgresService(tx)) {
      const teamPositionIds = await tx.team_positions.findMany({
        where: { team_id: teamId, position_id: { in: positionIds } },
        select: { id: true },
      });

      const mappedTeamPositionIds = teamPositionIds.map((tp) => tp.id);

      await tx.position_stacks.deleteMany({
        where: { team_position_id: { in: mappedTeamPositionIds } },
      });
      await tx.team_users.deleteMany({
        where: { team_position_id: { in: mappedTeamPositionIds } },
      });
      await tx.team_positions.deleteMany({
        where: { team_id: teamId, position_id: { in: positionIds } },
      });
      return;
    }

    await (tx ?? this.postgresService).$transaction(
      async (tx: PostgresService) => {
        const teamPositionIds = await tx.team_positions.findMany({
          where: { team_id: teamId, position_id: { in: positionIds } },
          select: { id: true },
        });

        const mappedTeamPositionIds = teamPositionIds.map((tp) => tp.id);
        await tx.position_stacks.deleteMany({
          where: { team_position_id: { in: mappedTeamPositionIds } },
        });
        await tx.team_users.deleteMany({
          where: { team_position_id: { in: mappedTeamPositionIds } },
        });
        await tx.team_positions.deleteMany({
          where: { team_id: teamId, position_id: { in: positionIds } },
        });
      },
    );
  }

  async createTeamPositions(
    teamId: string,
    teamPositions: TeamPositionDto[],
    tx?: PostgresService | TxClient,
  ) {
    if (tx && !this.isPostgresService(tx)) {
      if (teamPositions.length === 0) {
        return;
      }
      await tx.team_positions.createMany({
        data: teamPositions.map((position) => ({
          team_id: teamId,
          position_id: position.positionId,
          count: position.count,
          recruit_status: position.recruitStatus,
          status: true,
        })),
      });

      let stackIds: string[] = [];

      for (const teamPosition of teamPositions) {
        let prevStackId: string | null = null;

        for (const stack of teamPosition.positionStacks) {
          if (prevStackId !== stack.stackId) {
            await this.createPositionStacks(
              teamPosition.positionId,
              stackIds,
              tx,
            );
            stackIds = [];
          }
          prevStackId = stack.stackId;
        }
      }
      return;
    }

    await (tx ?? this.postgresService).$transaction(
      async (tx: PostgresService) => {
        if (teamPositions.length === 0) {
          return;
        }
        await tx.team_positions.createMany({
          data: teamPositions.map((position) => ({
            team_id: teamId,
            position_id: position.positionId,
            count: position.count,
            recruit_status: position.recruitStatus,
            status: true,
          })),
        });

        let stackIds: string[] = [];

        for (const teamPosition of teamPositions) {
          let prevStackId: string | null = null;

          for (const stack of teamPosition.positionStacks) {
            if (prevStackId !== stack.stackId) {
              await this.createPositionStacks(
                teamPosition.positionId,
                stackIds,
                tx,
              );
              stackIds = [];
            }
            prevStackId = stack.stackId;
          }
        }

        return;
      },
    );
  }

  async updateTeamPositions(
    teamId: string,
    positions: TeamPositionDto[],
    tx?: PostgresService | TxClient,
  ) {
    if (tx && !this.isPostgresService(tx)) {
      // 이미 트랜잭션 중이므로 그냥 진행
      await this._updateTeamPositions(teamId, positions, tx);
      return;
    }

    await (tx ?? this.postgresService).$transaction(async (trx) => {
      await this._updateTeamPositions(teamId, positions, trx);
    });
  }

  async getTeamPositionStacks(
    teamPositionIds: string[],
    tx?: PostgresService | TxClient,
  ) {
    if (tx && !this.isPostgresService(tx)) {
      return await this._getTeamPositionStacks(teamPositionIds, tx);
    }

    return await (tx ?? this.postgresService).$transaction(
      async (trx: TxClient) =>
        this._getTeamPositionStacks(teamPositionIds, trx),
    );
  }

  private async _updateTeamPositions(
    teamId: string,
    positions: TeamPositionDto[],
    tx: TxClient,
  ) {
    const positionIdToTeamPositionIds = await tx.team_positions.findMany({
      where: {
        team_id: teamId,
        position_id: { in: positions.map((p) => p.positionId) },
      },
      select: { id: true, position_id: true },
    });
    if (positionIdToTeamPositionIds.length !== positions.length) {
      throw new NotFoundException("Team position not found");
    }

    const newTeamPositionsStacks = positions.map((p) => {
      const teamPositionId = positionIdToTeamPositionIds.find(
        (tp) => tp.position_id === p.positionId,
      )?.id;
      if (!teamPositionId) {
        throw new NotFoundException("Team position not found");
      }
      return {
        teamPositionId,
        positionStacks: p.positionStacks,
        count: p.count,
        recruitStatus: p.recruitStatus,
      };
    });

    const prevTeamPositionsStacks = await this.getTeamPositionStacks(
      newTeamPositionsStacks.map((p) => p.teamPositionId),
      tx,
    );
    // 서로 가지고 있는 teamPositionId 값이 같으므로, 각 경우마다 stackId 집합 비교
    for (const newTeamPositionStacks of newTeamPositionsStacks) {
      const { teamPositionId, positionStacks, count, recruitStatus } =
        newTeamPositionStacks;

      const oldStackIds = prevTeamPositionsStacks
        .filter((p) => p.teamPositionId === teamPositionId)
        .flatMap((p) => p.positionStacks.map((s) => s.stackId));

      const newStackIds = positionStacks.map((s) => s.stackId);

      const stacksToAdd = newStackIds.filter((id) => !oldStackIds.includes(id));
      const stacksToRemove = oldStackIds.filter(
        (id) => !newStackIds.includes(id),
      );

      if (stacksToAdd.length) {
        await this.createPositionStacks(teamPositionId, stacksToAdd, tx);
      }
      if (stacksToRemove.length) {
        await this.deletePositionStacks(teamPositionId, stacksToRemove, tx);
      }
      await tx.team_positions.update({
        where: { id: teamPositionId },
        data: {
          count: count,
          recruit_status: recruitStatus,
        },
      });
    }
  }

  async _getTeamPositionStacks(teamPositionIds: string[], tx: TxClient) {
    const teamPositions = await tx.position_stacks.findMany({
      where: { team_position_id: { in: teamPositionIds } },
      select: {
        stack_id: true,
        team_position_id: true,
        stacks: {
          select: {
            id: true,
          },
        },
      },
    });

    return teamPositions.map((tp) => ({
      teamPositionId: tp.team_position_id,
      positionStacks: [
        {
          stackId: tp.stacks.id,
        },
      ],
    }));
  }
}
