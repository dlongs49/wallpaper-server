import {Body, Controller, Get, Post, Req, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {RequestDto} from "./dto/request.dto";
import { SignService } from "./sign.service";
import {AuthenGuard} from "../../authen/authen.guard";
import { Request } from "express";
@ApiTags("登录/注册/密码")
@Controller('sign')
export class SignController {
    constructor(private signService:SignService) {
    }
    @Post("reg_login")
    loginReg(@Body() requestDto: RequestDto) {
        return this.signService.loginReg(requestDto)
    }
    @ApiBearerAuth()
    @UseGuards(AuthenGuard)
    @Get("get_user")
    getUser(@Req() req:Request) {
        return this.signService.getUser(req)
    }
}
