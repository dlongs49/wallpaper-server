import {Body, Controller, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {RequestDto} from "./dto/request.dto";

@ApiTags("登录/注册/密码")
@Controller('sign')
export class SignController {
    @Post("reg_login")
    loginReg(@Body() requestDto: RequestDto) {
        console.log(requestDto)
    }
}
