import { isAbsolute, dirname, join } from "path";
import { promises } from "fs";

export class FileService {
  private async isExist(path: string) {
    try {
      await promises.stat(path); // проверяем существует ли файл
      return true;
    } catch {
      return false;
    }
  }
  public getFilePath(path: string, name: string, ext: string) {
    if (!isAbsolute(path)) {
      path = join(__dirname + "/" + path);
    }
    return join(dirname(path) + "/" + name + "." + ext);
  }
  async deleteFileIfExists(path: string) {
    if (await this.isExist(path)) {
      promises.unlink(path); // удаление файла
    }
  }
}
