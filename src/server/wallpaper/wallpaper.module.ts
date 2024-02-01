import {Module} from '@nestjs/common';
import {WallpaperService} from './wallpaper.service';
import {WallpaperController} from "./wallpaper.controller";
import {WallpaperTypeModel} from "./model/wallpaper_type.model";
import {WallpaperModel} from "./model/wallpaper.model";
import {CollectModel} from "@/server/sign/model/collect.model";

@Module({
    controllers: [WallpaperController],
    providers: [
        WallpaperService,
        {provide: 'WALLPAPER_TYPEE_PROVIDERS', useValue: WallpaperTypeModel},
        {provide: 'WALLPAPER_PROVIDERS', useValue: WallpaperModel},
        {provide: 'COLLECT_PROVIDERS', useValue: CollectModel},
    ],
})
export class WallpaperModule {
}
