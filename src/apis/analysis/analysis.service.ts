import { Injectable } from "@nestjs/common";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";

@Injectable()
export class AnalysisService {
  constructor(private readonly postgres: PostgresService) {}

  async getSupplyDemand() {
    const result = await this.postgres.stacks.findMany({
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            user_stacks: {
              where: {
                users: {
                  join_status: false,
                },
              },
            },
            position_stacks: {
              where: {
                team_positions: {
                  teams: {
                    recruit_status: "OPEN",
                  },
                },
              },
            },
          },
        },
      },
    });

    return result.map((stack) => ({
      stackId: stack.id,
      stackName: stack.name,
      supplyCount: stack._count.user_stacks,
      demandCount: stack._count.position_stacks,
    }));
  }
}
