/*
* Author:dinglong
* DateTime:2024/1/3 下午 11:01
*/
import {ApiProperty} from "@nestjs/swagger";

export class RequestDto{
    @ApiProperty({
        description: '用户名',
    })
    uname: string;
    @ApiProperty({
        description: '密码',
    })
    password: string;

}
