import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UploadService } from './upload.service';
import {UploadController} from "./upload.controller";
import { UploadMiddleware } from "./upload.middleware";

@Module({
  providers: [UploadService],
  controllers:[UploadController]
})
export class UploadModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(UploadMiddleware).forRoutes('*')
  }
}
