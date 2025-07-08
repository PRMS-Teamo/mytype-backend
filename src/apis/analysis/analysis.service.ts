import { Injectable } from "@nestjs/common";
import { PostgresService } from "@/prisma/postgres/postgres.service";

@Injectable()
export class AnalysisService {
  constructor(private readonly prisma: PostgresService) {}

  async getSupplyDemand() {
    const result = await this.prisma.stacks.findMany({
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
            team_stack_positions: {
              where: {
                teams: {
                  recruit_status: "OPEN",
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
      demandCount: stack._count.team_stack_positions,
    }));
  }
}

/* 
select 
  s.id as stack_id,
  s."name" as stack_name,  
  count(s.name) as supply_count,
  count(tsp.id) as demand_count
from 
  users u
  join user_stacks us on u.id = us.user_id
  join stacks s on us.stack_id = s.id
  join teams t on t.recruit_status = 'OPEN'
  join team_stack_positions tsp on t.id = tsp.team_id and s.id = tsp.stack_id
where 
  u.join_status = false
group by 
  s.id, s."name";






*/
