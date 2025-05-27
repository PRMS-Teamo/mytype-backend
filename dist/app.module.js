"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const core_1 = require("@nestjs/core");
const users_module_1 = require("./apis/users/users.module");
const auth_module_1 = require("./apis/auth/auth.module");
const admin_module_1 = require("./apis/admin/admin.module");
const chats_module_1 = require("./websockets/chats/chats.module");
const teams_module_1 = require("./apis/teams/teams.module");
const applies_module_1 = require("./apis/applies/applies.module");
const postgres_module_1 = require("./databases/postgres/postgres.module");
const mongo_module_1 = require("./databases/mongo/mongo.module");
const logger_module_1 = require("./loggers/logger.module");
const throttler_1 = require("@nestjs/throttler");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            throttler_1.ThrottlerModule.forRoot([
                {
                    name: 'short',
                    ttl: 1000,
                    limit: 3,
                },
                {
                    name: 'long',
                    ttl: 60000,
                    limit: 100,
                },
            ]),
            logger_module_1.LoggerModule,
            postgres_module_1.PostgresModule,
            mongo_module_1.MongoModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            teams_module_1.TeamsModule,
            applies_module_1.AppliesModule,
            admin_module_1.AdminModule,
            chats_module_1.ChatsModule,
            applies_module_1.AppliesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map