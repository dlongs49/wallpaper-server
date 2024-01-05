import {Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiOperation, ApiTags} from "@nestjs/swagger";
import {RequestDto} from "./dto/request.dto";
import { SignService } from "./sign.service";
import { Request } from "express";
import { AuthenGuard } from "../../authen/authen.guard";
@ApiTags("登录/注册/密码")
@Controller('sign')
export class SignController {
    constructor(private signService:SignService) {
    }
    @ApiOperation({ summary: '登录注册二合一' })
    @Post("reg_login")
    loginReg(@Body() requestDto: RequestDto) {
        return this.signService.loginReg(requestDto)
    }
    @ApiBearerAuth()
    @UseGuards(AuthenGuard)
    @ApiOperation({ summary: '获取用户信息' })
    @Get("get_user")
    getUser(@Req() req:Request) {
        return this.signService.getUser(req)
    }
}
