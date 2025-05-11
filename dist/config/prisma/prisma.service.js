"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const config_1 = require("@nestjs/config");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    configService;
    constructor(configService) {
        super();
        this.configService = configService;
    }
    async onModuleInit() {
        try {
            const url = this.configService.get('DATABASE_URL');
            if (!url) {
                throw new Error('DATABASE_URL is not defined in .env');
            }
            this.$connect = () => new client_1.PrismaClient({
                datasources: {
                    db: {
                        url,
                    },
                },
            }).$connect();
            await this.$connect();
            console.log('✅ Connected to PostgreSQL via Prisma');
        }
        catch (error) {
            console.error('Failed to connect to PostgreSQL:', error);
            throw error;
        }
    }
    async onModuleDestroy() {
        try {
            await this.$disconnect();
            console.log('Disconnected from PostgreSQL');
        }
        catch (error) {
            console.error('Failed to disconnect from PostgreSQL:', error);
            throw error;
        }
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map