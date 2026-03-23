import { ICommandExec } from "../../core/executor/command.types";
export interface IFfmpegInput {
    width: number;
    height: number;
    path: string;
    name: string;
}
export interface ICommandExectFfmpeg extends ICommandExec {
    output: string;
}
//# sourceMappingURL=ffmpeg.types.d.ts.map