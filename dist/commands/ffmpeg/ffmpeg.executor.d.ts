import { ChildProcessWithoutNullStreams } from "node:child_process";
import { CommandExecutor } from "../../core/executor/command.executor";
import { IStreamLogger } from "../../core/hadlers/stream-logger.interface";
import { ICommandExectFfmpeg, IFfmpegInput } from "./ffmpeg.types";
export declare class FfmpegExecutor extends CommandExecutor<IFfmpegInput> {
    private fileService;
    private promptService;
    constructor(logger: IStreamLogger);
    protected prompt(): Promise<IFfmpegInput>;
    protected build({ width, height, path, name, }: IFfmpegInput): ICommandExectFfmpeg;
    protected spawn({ output, command, args, }: ICommandExectFfmpeg): ChildProcessWithoutNullStreams;
    protected processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void;
}
//# sourceMappingURL=ffmpeg.executor.d.ts.map