import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PostgresService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
}
