import {Body, Controller, Post} from '@nestjs/common';
import {LoginService} from "./login.service";
import {LoginDto} from "./dto/login.dto";
import {ApiOperation, ApiTags} from "@nestjs/swagger";
@ApiTags("后台登录")
@Controller('login')
export class LoginController {
    constructor(private loginServie:LoginService) {
    }
    @ApiOperation({ summary: '登录' })
    @Post("admin_login")
    setCookies(@Body() loginDto:LoginDto){
        return this.loginServie.setCookies(loginDto)
    }
}
