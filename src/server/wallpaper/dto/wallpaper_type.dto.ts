/*
* Author:dinglong
* DateTime:2024/1/7 上午 12:34
*/
import {ApiProperty} from "@nestjs/swagger";

export class WallpaperTypeReqDto {
    @ApiProperty({
        description: '壁纸类型标题',
    })
    title: string;
    @ApiProperty({
        description: '壁纸展示封面图片',
    })
    cover_url: string;
    @ApiProperty({
        description: '壁纸链接类型 0 上传 1 链接',
    })
    cover_type: number;

}

export class WallpaperTypeExDto extends WallpaperTypeReqDto {
    @ApiProperty({
        description: 'id',
    })
    id: string;
}
