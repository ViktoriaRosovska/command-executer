export declare class FfmpegBuilder {
    private inputPath;
    private outputPath;
    private options;
    constructor();
    input(inputPath: string): this;
    setVideoSize(width: number, height: number): this;
    output(outputPath: string): string[];
}
//# sourceMappingURL=ffmpeg.builder.d.ts.map