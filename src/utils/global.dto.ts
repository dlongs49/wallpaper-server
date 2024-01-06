/*
* Author:dinglong
* DateTime:2024/1/7 上午 12:10
*/
import {ApiProperty} from "@nestjs/swagger";

export class PageReqDto{
    @ApiProperty({
        description: '页码',
    })
    offset: number;
    @ApiProperty({
        description: '每页条数',
    })
    limit: number;
}
