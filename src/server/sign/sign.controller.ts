import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {RequestDto} from "./dto/request.dto";
import { ResFail, ResSuccess } from "../../utils/http.response";
@ApiTags("登录/注册/密码")
@Controller('sign')
export class SignController {
    @Post("reg_login")
    loginReg(@Body() requestDto: RequestDto) {
        throw new ResSuccess({a: "14444" } )
        // throw new ResFail()
    }
}
