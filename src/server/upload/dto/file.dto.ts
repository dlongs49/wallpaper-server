import {ApiProperty} from "@nestjs/swagger";

export class FileDto {
    @ApiProperty({ type: 'file', format: 'binary' })
    avatar_file: any;
}
export class WallpaperFileDto {
    @ApiProperty({ type: 'file', format: 'binary' })
    wallpaper_file: any;
}
