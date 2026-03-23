import { IStreamLogger } from "../../core/hadlers/stream-logger.interface";
export declare class ConsoleLogger implements IStreamLogger {
    private static logger;
    static getInstance(): ConsoleLogger;
    log(...args: any[]): void;
    error(...args: any[]): void;
    end(): void;
}
//# sourceMappingURL=console-logger.d.ts.map