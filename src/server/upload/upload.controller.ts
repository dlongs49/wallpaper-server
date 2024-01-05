import {Controller, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {FilesInterceptor} from "@nestjs/platform-express";
import {ApiBody, ApiConsumes, ApiOperation, ApiTags} from "@nestjs/swagger";
import {FileDto} from "./dto/file.dto";
@ApiTags("文件上传")


@Controller('upload')
export class UploadController {
    @ApiOperation({ summary: '头像上传 ' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: '选取图片',
        type: FileDto,
    })
    @Post("avatar")
    @UseInterceptors(FilesInterceptor('files'))
    uploadAvatar(@UploadedFiles() files: Array<Express.Multer.File>){
        console.log(files)
    }
}
