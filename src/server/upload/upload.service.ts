import { Inject, Injectable } from "@nestjs/common";
import { ResFail, ResSuccess } from "@/utils/http.response";
import { JsonFile } from "./upload.utils";
import { v4 as uuid } from "uuid";
import { UploadLogDto } from "./dto/file.dto";

@Injectable()
export class UploadService {
  constructor(@Inject("UPLOADLOG_PROVIDERS") private readonly uploadlogProviders: any) {
  }

  async uploadAvatarSer(files: Array<Express.Multer.File>) {
    let r = JsonFile(files[0]);
    await this.uploadlogProviders.create({
      id: uuid(),
      file_name: r.name,
      file_path: r.url,
      create_time: new Date()
    });
    return new ResSuccess(JsonFile(files[0]));
  }

  uploadWallpaperSer(files: Array<Express.Multer.File>) {
    return new ResSuccess(JsonFile(files[0]));
  }

  async getUploadFath(uploadLogDto: UploadLogDto) {
    let data = await this.uploadlogProviders.findOne({ where: { file_name: uploadLogDto.file_name }, raw: true });
    if (data) {
      return new ResSuccess(data);
    }
    return new ResFail("未找到该图片");
  }
}
