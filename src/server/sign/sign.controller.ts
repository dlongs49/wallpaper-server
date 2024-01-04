import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {RequestDto} from "./dto/request.dto";
import { SignService } from "./sign.service";
import { AuthGuard } from "@nestjs/passport";
@ApiTags("登录/注册/密码")
@Controller('sign')
export class SignController {
    constructor(private signService:SignService) {
    }
    @UseGuards(AuthGuard("local"))
    @Post("reg_login")
    loginReg(@Body() requestDto: RequestDto) {
        return this.signService.loginReg(requestDto)
    }
}
