import {Inject, Injectable} from '@nestjs/common';
import {WallpaperTypeReqDto} from "./dto/wallpaper_type.dto";

@Injectable()
export class WallpaperService {
    constructor(@Inject("WALLPAPER_TYPEE_PROVIDERS") private  readonly wallpaper_type_providers: any) {
    }
    setWallpaperType(wallpaperTypeResDto: WallpaperTypeReqDto){
        this.wallpaper_type_providers.create()
    }
}
