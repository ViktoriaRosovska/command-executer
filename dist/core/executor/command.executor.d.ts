import { ChildProcessWithoutNullStreams } from "child_process";
import { IStreamLogger } from "../hadlers/stream-logger.interface";
import { ICommandExec } from "./command.types";
export declare abstract class CommandExecutor<Input> {
    private logger;
    constructor(logger: IStreamLogger);
    execute(): Promise<void>;
    protected abstract prompt(): Promise<Input>;
    protected abstract build(input: Input): ICommandExec;
    protected abstract spawn(command: ICommandExec): ChildProcessWithoutNullStreams;
    protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void;
}
//# sourceMappingURL=command.executor.d.ts.map