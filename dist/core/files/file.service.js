"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
class FileService {
    async isExist(path) {
        try {
            await fs_1.promises.stat(path); // проверяем существует ли файл
            return true;
        }
        catch {
            return false;
        }
    }
    getFilePath(path, name, ext) {
        if (!(0, path_1.isAbsolute)(path)) {
            path = (0, path_1.join)(__dirname + "/" + path);
        }
        return (0, path_1.join)((0, path_1.dirname)(path) + "/" + name + "." + ext);
    }
    async deleteFileIfExists(path) {
        if (await this.isExist(path)) {
            fs_1.promises.unlink(path); // удаление файла
        }
    }
}
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map