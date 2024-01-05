import {Controller, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {FilesInterceptor} from "@nestjs/platform-express";

@Controller('upload')
export class UploadController {

    @Post("avatar")
    @UseInterceptors(FilesInterceptor('files'))
    uploadAvatar(@UploadedFiles() files: Array<Express.Multer.File>){
        console.log(files)
    }
}
