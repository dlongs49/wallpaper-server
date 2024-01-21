import {ApiProperty} from "@nestjs/swagger";

export class FileDto {
    @ApiProperty({type: 'file', format: 'binary'})
    avatar: any;
}

export class WallpaperFileDto {
    @ApiProperty({type: 'file', format: 'binary'})
    wallpaper: any;
}

export class UploadLogDto {
    @ApiProperty({
        description: '图片名称',
    })
    file_name: string
}
