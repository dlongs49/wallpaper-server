import { Injectable } from '@nestjs/common';
import { ResSuccess } from "../../utils/http.response";
import { JsonFile } from "./upload.utils";

@Injectable()
export class UploadService {
  uploadAvatarSer(files:Array<Express.Multer.File>){
    throw new ResSuccess(JsonFile(files[0]))

  }
}
