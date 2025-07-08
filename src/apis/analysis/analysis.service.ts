import { Injectable } from "@nestjs/common";
import { PostgresService } from "@/prisma/postgres/postgres.service";

@Injectable()
export class AnalysisService {
  constructor(private readonly prisma: PostgresService) {}
}
