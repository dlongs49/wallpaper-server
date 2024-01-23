import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {ApiOperation, ApiParam, ApiTags} from "@nestjs/swagger";
import {WallpaperService} from "./wallpaper.service";
import {WallpaperTypeExDto, WallpaperTypeReqDto} from "./dto/wallpaper_type.dto";
import {FilterAppDto,  FilterReqDto, PageReqDto} from "@/utils/global.dto";
import {WallpaperReqDto, WallpaperReqExDto, WallpaperSortExDto} from "./dto/wallpaper.dto";
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
    updateWallpaperType(@Body() wallpaperTypeExDto:WallpaperTypeExDto){
        return this.wallpaperService.updateWallpaperType(wallpaperTypeExDto)
    }
    @ApiOperation({ summary: '删除壁纸类型' })
    @Post("del_wallpaper_type")
    delWallpaperType(@Body() idArr:Array<string>){
        console.log(idArr);
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
    @ApiOperation({ summary: '壁纸详情' })
    @ApiParam({ name: 'id' })
    @Get("detail_wallpaper/:id")
    getWallpaperDetail(@Param('id') id:string){
        return this.wallpaperService.getWallpaperDetail(id)
    }
    @ApiOperation({ summary: '更新壁纸' })
    @Post("update_wallpaper")
    updateWallpaper(@Body() wallpaperReqExDto: WallpaperReqExDto){
        return this.wallpaperService.updateWallpaper(wallpaperReqExDto)
    }
    @ApiOperation({ summary: '删除壁纸' })
    @Post("del_wallpaper")
    delWallpaper(@Body() idArr:Array<string>){
        return this.wallpaperService.delWallpaper(idArr)
    }
    @ApiOperation({ summary: '壁纸列表' })
    @Post("get_wallpaper")
    getWallpaperList(@Query() pageReqDto: PageReqDto,@Body() wallpaperSortExDto:WallpaperSortExDto){
        return this.wallpaperService.getWallpaperList(pageReqDto,wallpaperSortExDto)
    }
    @ApiOperation({ summary: '壁纸列表【App端】' })
    @Post("/app/get_wallpaper")
    getWPAppList(@Query() pageReqDto: PageReqDto,@Body() filterappDto:FilterAppDto){
        return this.wallpaperService.getWallpaperAppList(pageReqDto,filterappDto)
    }
    @ApiOperation({ summary: '壁纸详情【App端】' })
    @ApiParam({ name: 'id' })
    @Get("/app/detail_wallpaper/:id")
    getWPADetail(@Param('id') id:string){
        return this.wallpaperService.getWallpaperAppDetail(id)
    }
}
