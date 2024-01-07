import {Body, Controller, Get, Inject, Param, Post, Query} from '@nestjs/common';
import {ApiOperation, ApiParam, ApiQuery, ApiTags} from "@nestjs/swagger";
import {WallpaperService} from "./wallpaper.service";
import {WallpaperTypeExDto, WallpaperTypeReqDto} from "./dto/wallpaper_type.dto";
import {FilterReqDto, PageReqDto} from "../../utils/global.dto";
import {WallpaperReqDto} from "./dto/wallpaper.dto";
@ApiTags("壁纸管理")
@Controller('wallpaper')
export class WallpaperController {
    constructor(private wallpaperService:WallpaperService, ) {}
    @ApiOperation({ summary: '新增壁纸类型' })
    @Post("set_wallpaper_type")
    setWallpaperType(@Body() wallpaperTypeResDto: WallpaperTypeReqDto){
        return this.wallpaperService.setWallpaperType(wallpaperTypeResDto)
    }
    @ApiOperation({ summary: '壁纸类型详情' })
    @ApiParam({ name: 'id' })
    @Get("detail_wallpaper_type/:id")
    getWallpaperTypeDetail(@Param('id') id:string){
        return this.wallpaperService.getWallpaperTypeDetail(id)
    }
    @ApiOperation({ summary: '更新壁纸类型' })
    @Post("update_wallpaper_type")
    uploadWallpaperType(@Body() wallpaperTypeExDto:WallpaperTypeExDto){
        return this.wallpaperService.uploadWallpaperType(wallpaperTypeExDto)
    }
    @ApiOperation({ summary: '删除壁纸类型' })
    @Post("del_wallpaper_type")
    delWallpaperType(@Body() idArr:Array<string>){
        return this.wallpaperService.delWallpaperType(idArr)
    }
    @ApiOperation({ summary: '壁纸类型列表' })
    @Post("get_wallpaper_type")
    getWallpaperTypeList(@Query() pageReqDto: PageReqDto,@Body() filterReqDto:FilterReqDto){
        return this.wallpaperService.getWallpaperTypeList(pageReqDto,filterReqDto)
    }
    @ApiOperation({ summary: '壁纸类型【App端】' })
    @Post("/app/get_wallpaper_type")
    getWTAppList(@Query() pageReqDto: PageReqDto,@Body() filterReqDto:FilterReqDto){
        return this.wallpaperService.getWallpaperTypeList(pageReqDto,filterReqDto)
    }

    /**
     * 壁纸列表
     */
    @ApiOperation({ summary: '新增壁纸' })
    @Post("set_wallpaper")
    setWallpaper(@Body() wallpaperReqDto: WallpaperReqDto){
        return this.wallpaperService.setWallpaper(wallpaperReqDto)
    }


}
