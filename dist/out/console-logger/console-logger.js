"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
class ConsoleLogger {
    static logger;
    static getInstance() {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        return ConsoleLogger.logger;
    }
    log(...args) {
        console.log(args);
    }
    error(...args) {
        console.log(args);
    }
    end() {
        console.log("End process");
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=console-logger.js.map