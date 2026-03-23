import { IStreamLogger } from "../../core/hadlers/stream-logger.interface";

export class ConsoleLogger implements IStreamLogger {
  private static logger: ConsoleLogger;

  public static getInstance() {
    if (!ConsoleLogger.logger) {
      ConsoleLogger.logger = new ConsoleLogger();
    }
    return ConsoleLogger.logger;
  }
  log(...args: any[]) {
    console.log(args);
  }
  error(...args: any[]) {
    console.log(args);
  }
  end() {
    console.log("End process");
  }
}
