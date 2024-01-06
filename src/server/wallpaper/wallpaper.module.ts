import { Module } from '@nestjs/common';
import { WallpaperService } from './wallpaper.service';
import {WallpaperController} from "./wallpaper.controller";
import {WallpaperTypeModel} from "./model/wallpaper_type.model";

@Module({
  controllers:[WallpaperController],
  providers: [
      WallpaperService,
     {  provide: 'WALLPAPER_TYPEE_PROVIDERS',useValue: WallpaperTypeModel}
  ]
})
export class WallpaperModule {}
