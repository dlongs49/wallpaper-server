/*
* Author:dinglong
* DateTime:2024/1/10 下午 8:20
*/
import {ApiProperty} from "@nestjs/swagger";

export class LoginDto{
    @ApiProperty({
        description: '后台登录账号',
    })
    account: string;
    @ApiProperty({
        description: '后台登录密码',
    })
    password: string;
}
