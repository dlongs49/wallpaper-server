/*
* Author:dinglong
* DateTime:2024/1/6 下午 10:54
*/
import {ApiProperty} from "@nestjs/swagger";

export class UserDto{
    @ApiProperty({
        description: '头像',
    })
    avatar: string;
    @ApiProperty({
        description: '昵称',
    })
    uname: string;
    @ApiProperty({
        description: '性别',
    })
    sex: string;
}
export class  ArticleListResponse{
    @ApiProperty({ description: '状态码', example: 200, })
    code: number
}
export class IdDto{
    @ApiProperty({ description: '壁纸id' })
    wallpaper_id: string
}
