/*
* Author:dinglong
* DateTime:2024/1/7 下午 1:47
*/
import {ApiProperty} from "@nestjs/swagger";

export class WallpaperReqDto {
    @ApiProperty({
        description: '壁纸标题',
    })
    title: string;
    @ApiProperty({
        description: '壁纸类型',
    })
    type_id: string;
    @ApiProperty({
        description: '壁纸图片url',
    })
    url: string;
    @ApiProperty({
        description: '壁纸图片类型 0 上传 1 链接',
    })
    url_type: number;
}
export class WallpaperReqExDto extends WallpaperReqDto{
    @ApiProperty({
        description: 'id',
    })
    id:string
}
