import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Logger,
    Param,
    Post,
    Query,
    Req,
    Res,
    UseGuards
} from "@nestjs/common";
import {ApiBearerAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {RequestDto} from "./dto/request.dto";
import { SignService } from "./sign.service";
import { Request } from "express";
import { AuthenGuard } from "../../authen/authen.guard";
import {ArticleListResponse, IdDto, UserDto} from "./dto/user.dto";
import {PageReqDto} from "../../utils/global.dto";
@ApiTags("登录/注册/用户信息")
@Controller('sign')
export class SignController {
    constructor(private signService:SignService) {
    }
    @ApiOperation({ summary: '登录注册二合一' })
    @Post("reg_login")
    loginReg(@Body() requestDto: RequestDto,@Req() req:Request) {
        return this.signService.loginReg(requestDto,req)
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
    @ApiOperation({ summary: '收藏壁纸操作【App端】' })
    @Post("/app/collect_wallpaper")
    setUerCollect(@Query() idDto: IdDto,@Req() req:Request) {
        return this.signService.setUerWallpaper(idDto,req,0)
    }
    @ApiBearerAuth()
    @UseGuards(AuthenGuard)
    @ApiOperation({ summary: '个人收藏的壁纸【App端】' })
    @Get("/app/get_collect_wallpaper")
    getUerCollect(@Query() pageReqDto: PageReqDto) {
        return this.signService.getUerWallpaper(pageReqDto,0)
    }
    @ApiBearerAuth()
    @UseGuards(AuthenGuard)
    @ApiOperation({ summary: '删除个人收藏壁纸【App端】' })
    @Post("/app/del_collect_wallpaper")
    delUserCollect(@Body() idArr:Array<string>){
        return this.signService.delUserCollect(idArr)
    }
    @ApiBearerAuth()
    @UseGuards(AuthenGuard)
    @ApiOperation({ summary: '应用壁纸操作【App端】' })
    @Post("/app/apply_wallpaper")
    setUerApply(@Query() idDto: IdDto,@Req() req:Request) {
        return this.signService.setUerWallpaper(idDto,req,1)
    }
    @ApiBearerAuth()
    @UseGuards(AuthenGuard)
    @ApiOperation({ summary: '应用壁纸记录【App端】' })
    @Get("/app/get_apply_wallpaper")
    getUerApply(@Query() pageReqDto: PageReqDto) {
        return this.signService.getUerWallpaper(pageReqDto,1)
    }
}
