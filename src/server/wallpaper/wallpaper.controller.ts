import {Body, Controller, Get, Inject, Param, Post, Query} from '@nestjs/common';
import {ApiOperation, ApiParam, ApiQuery, ApiTags} from "@nestjs/swagger";
import {WallpaperService} from "./wallpaper.service";
import {WallpaperTypeExDto, WallpaperTypeReqDto} from "./dto/wallpaper_type.dto";
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
}
