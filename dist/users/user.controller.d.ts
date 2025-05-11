import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        username: string;
        email: string;
        createdAt: Date;
    }[]>;
}
