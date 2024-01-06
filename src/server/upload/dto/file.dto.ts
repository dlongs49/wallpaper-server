import {ApiProperty} from "@nestjs/swagger";

export class FileDto {
    @ApiProperty({ type: 'file', format: 'binary' })
    avatar: any;
}
export class WallpaperFileDto {
    @ApiProperty({ type: 'file', format: 'binary' })
    wallpaper: any;
}
