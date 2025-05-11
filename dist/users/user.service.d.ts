import { PrismaService } from '@/config/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        username: string;
        email: string;
        createdAt: Date;
    }[]>;
}
