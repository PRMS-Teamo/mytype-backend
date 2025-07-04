import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "@/databases/prisma/prisma.service";
import { UsersService } from "@/apis/users/users.service";
import { StacksRepository } from "@/repositories/stacks.repository";
import { PositionRepository } from "@/repositories/position.repository";

@Injectable()
export class TeamsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private readonly stackRepository: StacksRepository,
    private readonly positionRepository: PositionRepository,
  ) {}

  async createTeam(data) {
    const userUUID = data.user_id;
    const checkUUID = await this.usersService.getJoinStatusByUuid(userUUID);
    if (checkUUID) {
      throw new BadRequestException("이미 팀에 소속되어있는 인원입니다.");
    }
    const { stacks, need, ...rest } = data; //stacks와 분리
    const createTeamTransaction = await this.prisma.$transaction(async (tx) => {
      // step 1. 팀 생성
      const createTeam = await tx.teams.create({
        data: rest,
      });
      // step 2. 해당 team_id, stack_id 바탕으로 team_stack_position 업데이트 준비
      const team_id = createTeam.id;
      const idInfo =
        await this.stackRepository.getStackIdsByStackObject(stacks);
      const positionIds: Record<string, string> = idInfo.position;
      const stackIds: Record<string, Record<string, string>> = idInfo.stacks;

      for (const [position, position_id] of Object.entries(positionIds)) {
        console.log(position, position_id);
        const targetStacks = stackIds[position];
        for (const [stack, stack_id] of Object.entries(targetStacks)) {
          await tx.team_stack_positions.create({
            data: {
              team_id,
              stack_id,
              position_id,
              status: false,
              count: need[position],
            },
          });
          console.log(stack, stack_id);
        }
      }

      // step 3. id 관련 정보 입력

      // step 4. 생성 유저 정보 업데이트
      await this.usersService.updateJoinStatusByUuid(userUUID, true);

      return { message: "팀 정상 생성" };
    });

    return createTeamTransaction;
  }
}
