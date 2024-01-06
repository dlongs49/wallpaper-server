import {Inject, Injectable} from '@nestjs/common';
import {WallpaperTypeReqDto} from "./dto/wallpaper_type.dto";
import {v4 as uid} from "uuid";
import {ResFail, ResSuccess} from "../../utils/http.response";
@Injectable()
export class WallpaperService {
    constructor(@Inject("WALLPAPER_TYPEE_PROVIDERS") private  readonly wallpaper_type_providers: any) {
    }
   async setWallpaperType(wallpaperTypeResDto: WallpaperTypeReqDto){
        if(!wallpaperTypeResDto.title){
            throw new ResFail("标题不能为空")
        }
        if(!wallpaperTypeResDto.cover_url){
            throw new ResFail("封面不能为空")
        }
        let arr = [0,1]
        if(!arr.includes(wallpaperTypeResDto.cover_type)){
            throw new ResFail("封面类型参数不合法")
        }
        let dto = {
            id:uid(),
            create_time:new Date(),
            ...wallpaperTypeResDto
        }
        await this.wallpaper_type_providers.create(dto)
       throw new ResSuccess(new Date().getTime())
    }
}
