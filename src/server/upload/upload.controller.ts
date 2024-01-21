import {Controller, Get, Param, Post, Query, Res, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {FilesInterceptor} from "@nestjs/platform-express";
import {ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiProperty, ApiTags} from "@nestjs/swagger";
import {FileDto, UploadLogDto, WallpaperFileDto} from "./dto/file.dto";
import { UploadService } from "./upload.service";
@ApiTags("文件上传")


@Controller('upload')
export class UploadController {
    constructor(private  uploadService:UploadService) {
    }
    @ApiOperation({ summary: '头像上传 ' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: '选取图片',
        type: FileDto,
    })
    @Post("avatar")
    @UseInterceptors(FilesInterceptor('avatar'))
    uploadAvatar(@UploadedFiles() files: Array<Express.Multer.File>){
       return this.uploadService.uploadAvatarSer(files)
    }
    @ApiOperation({ summary: '壁纸上传' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: '选取壁纸文件',
        type: WallpaperFileDto,
    })
    @Post("wallpaper")
    @UseInterceptors(FilesInterceptor('wallpaper'))
    uploadWallpaper(@UploadedFiles() files: Array<Express.Multer.File>){
        return this.uploadService.uploadWallpaperSer(files)
    }
    @ApiOperation({ summary: '根据名称获取图片地址' })
    @Get("path")
    getUploadFath(@Query() uploadLogDto:UploadLogDto){
        return this.uploadService.getUploadFath(uploadLogDto)
    }
}
