/*
* Author:dinglong
* DateTime:2024/1/2 下午 8:45
*/
import {ApiProperty} from "@nestjs/swagger";

export class User{
    @ApiProperty({
        description: '用户名',
    })
    username: string;
    @ApiProperty({
        description: '密码',
    })
    password: string;
}
