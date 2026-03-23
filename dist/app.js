"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffmpeg_executor_1 = require("./commands/ffmpeg/ffmpeg.executor");
const console_logger_1 = require("./out/console-logger/console-logger");
class App {
    async run() {
        new ffmpeg_executor_1.FfmpegExecutor(console_logger_1.ConsoleLogger.getInstance()).execute();
    }
}
const app = new App();
app.run();
//# sourceMappingURL=app.js.map