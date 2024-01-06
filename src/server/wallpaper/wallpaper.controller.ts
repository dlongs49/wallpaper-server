import {Controller, Inject, Post} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {WallpaperService} from "./wallpaper.service";
@ApiTags("壁纸管理")
@Controller('wallpaper')
export class WallpaperController {
    constructor(private wallpaperService:WallpaperService, ) {}
    @ApiOperation({ summary: '新增壁纸类型' })
    @Post("set_wallpaper_type")
    setWallpaperType(){

    }
}
