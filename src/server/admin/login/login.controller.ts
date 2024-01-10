import {Body, Controller, Post, Req, Res, Session} from '@nestjs/common';
import {LoginService} from "./login.service";
import {LoginDto} from "./dto/login.dto";
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {Request, Response} from "express";

@ApiTags("后台登录")
@Controller('login')
export class LoginController {
    constructor(private loginServie:LoginService) {
    }
    @ApiOperation({ summary: '登录' })
    @Post("admin_login")
    adminLogin(@Body() loginDto:LoginDto,@Res() res:Response){
        return this.loginServie.adminLogin(loginDto,res)
    }
    @ApiOperation({ summary: '测试' })
    @Post("test")
    test(@Body() loginDto:LoginDto,@Req() req:Request){
        return this.loginServie.test(loginDto,req)
    }
}
