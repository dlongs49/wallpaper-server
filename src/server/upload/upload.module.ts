import { Module } from "@nestjs/common";
import { UploadService } from './upload.service';
import {UploadController} from "./upload.controller";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { HandleFileFilter, HandleFilename,HandleDestination } from "./upload.utils";

@Module({
  imports:[
    MulterModule.register({
      storage: diskStorage({
        destination: HandleDestination, // 文件路径处理回调
        filename: HandleFilename // 文件名称处理回调
      }),
      fileFilter: HandleFileFilter // 文件校验处理回调
    }),
  ],
  providers: [UploadService],
  controllers:[UploadController]
})
export class UploadModule{
}
