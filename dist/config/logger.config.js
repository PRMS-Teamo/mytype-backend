"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerConfig = void 0;
const loggerConfig = () => ({
    log: (message, ...optionalParams) => {
        console.log(message, ...optionalParams);
    },
    error: (message, ...optionalParams) => {
        console.error(message, ...optionalParams);
    },
    warn: (message, ...optionalParams) => {
        console.warn(message, ...optionalParams);
    },
    debug: (message, ...optionalParams) => {
        if (process.env.LOG_LEVEL === 'debug') {
            console.debug(message, ...optionalParams);
        }
    },
    verbose: (message, ...optionalParams) => {
        if (process.env.LOG_LEVEL === 'verbose') {
            console.log(message, ...optionalParams);
        }
    },
});
exports.loggerConfig = loggerConfig;
//# sourceMappingURL=logger.config.js.map