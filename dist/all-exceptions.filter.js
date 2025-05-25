"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AllExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const logger_service_1 = require("./loggers/logger.service");
const library_1 = require("@prisma/client/runtime/library");
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter extends core_1.BaseExceptionFilter {
    logger = new logger_service_1.LoggerService(AllExceptionsFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        this.logger.log(`Exception type: ${exception && typeof exception === 'object' && 'constructor' in exception ? exception.constructor.name : 'unknown'}`, AllExceptionsFilter_1.name);
        this.logger.log(`Is HttpException: ${exception instanceof common_1.HttpException}`, AllExceptionsFilter_1.name);
        this.logger.log(`Is PrismaClientValidationError: ${exception instanceof library_1.PrismaClientValidationError}`, AllExceptionsFilter_1.name);
        if (exception &&
            typeof exception === 'object' &&
            'constructor' in exception) {
            this.logger.log(`Exception constructor name: ${exception.constructor.name}`, AllExceptionsFilter_1.name);
            if ('message' in exception) {
                this.logger.log(`Exception message: ${String(exception.message).substring(0, 100)}...`, AllExceptionsFilter_1.name);
            }
        }
        const responseObj = {
            statusCode: 500,
            timestamp: new Date().toISOString(),
            path: request.url,
            response: '',
        };
        if (exception instanceof common_1.HttpException) {
            this.logger.log('Processing as HttpException', AllExceptionsFilter_1.name);
            responseObj.statusCode = exception.getStatus();
            responseObj.response = exception.getResponse();
        }
        else if (exception instanceof library_1.PrismaClientValidationError ||
            (exception &&
                typeof exception === 'object' &&
                'constructor' in exception &&
                exception.constructor.name === 'PrismaClientValidationError')) {
            this.logger.log('Processing as PrismaClientValidationError', AllExceptionsFilter_1.name);
            responseObj.statusCode = 422;
            responseObj.response =
                exception &&
                    typeof exception === 'object' &&
                    'message' in exception &&
                    typeof exception.message === 'string'
                    ? exception.message.replaceAll(/\n/g, ' ')
                    : 'Prisma validation error';
        }
        else {
            this.logger.log('Processing as unknown error', AllExceptionsFilter_1.name);
            responseObj.statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            responseObj.response = 'Internal Server Error';
        }
        response.status(responseObj.statusCode).json(responseObj);
        this.logger.error(responseObj.response, AllExceptionsFilter_1.name);
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
//# sourceMappingURL=all-exceptions.filter.js.map