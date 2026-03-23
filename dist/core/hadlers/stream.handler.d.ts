import { ChildProcessWithoutNullStreams } from "child_process";
import { IStreamLogger } from "./stream-logger.interface";
export declare class StreamHandler {
    private logger;
    constructor(logger: IStreamLogger);
    processOutput(stream: ChildProcessWithoutNullStreams): void;
}
//# sourceMappingURL=stream.handler.d.ts.map