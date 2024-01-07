import {Body, Controller, Get, HttpCode, HttpStatus, Post, Query, Req, Res, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {RequestDto} from "./dto/request.dto";
import { SignService } from "./sign.service";
import { Request } from "express";
import { AuthenGuard } from "../../authen/authen.guard";
import {ArticleListResponse, UserDto} from "./dto/user.dto";
import {PageReqDto} from "../../utils/global.dto";
@ApiTags("登录/注册/用户信息")
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

    @ApiBearerAuth()
    @UseGuards(AuthenGuard)
    @ApiOkResponse({ description: '文章列表', type: ArticleListResponse })
    @ApiOperation({ summary: '更新用户信息' })
    @Post("put_user")
    updateUser(@Body() userDto:UserDto,@Req() request:Request) {
        return this.signService.updateUser(userDto,request)
    }

    @ApiBearerAuth()
    @UseGuards(AuthenGuard)
    @ApiOperation({ summary: '个人收藏的壁纸【App端】' })
    @Post("/app/get_collect_wallpaper")
    getUerCollect(@Query() pageReqDto: PageReqDto) {
        return this.signService.getUerCollect(pageReqDto,PageReqDto)
    }
}
