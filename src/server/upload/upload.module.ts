import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UploadService } from './upload.service';
import {UploadController} from "./upload.controller";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { HandleFileFilter, HandleFilename,HandleDestination } from "./upload.utils";

@Module({
  imports:[
    MulterModule.register({
      storage: diskStorage({
        destination: HandleDestination,
        filename: HandleFilename
      }),
      fileFilter: HandleFileFilter
    }),
  ],
  providers: [UploadService],
  controllers:[UploadController]
})
export class UploadModule{
}
