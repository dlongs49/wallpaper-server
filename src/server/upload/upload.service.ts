import {Inject, Injectable} from '@nestjs/common';
import { ResSuccess } from "../../utils/http.response";
import { JsonFile } from "./upload.utils";
import {v4 as uuid} from "uuid";

@Injectable()
export class UploadService {
  constructor(@Inject("UPLOADLOG_PROVIDERS") private readonly uploadlogProviders: any) {
  }
  async uploadAvatarSer(files:Array<Express.Multer.File>){
    let r = JsonFile(files[0])
    await this.uploadlogProviders.create({
      id: uuid(),
      file_name: r.name,
      file_path: r.url,
      create_time: new Date()
    })
    throw new ResSuccess(JsonFile(files[0]))
  }
  uploadWallpaperSer(files:Array<Express.Multer.File>){
    throw new ResSuccess(JsonFile(files[0]))
  }
}
