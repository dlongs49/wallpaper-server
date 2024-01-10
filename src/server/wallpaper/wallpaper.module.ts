import {Module, NestMiddleware} from '@nestjs/common';
import { WallpaperService } from './wallpaper.service';
import {WallpaperController} from "./wallpaper.controller";
import {WallpaperTypeModel} from "./model/wallpaper_type.model";
import {WallpaperModel} from "./model/wallpaper.model";

@Module({
  controllers:[WallpaperController],
  providers: [
      WallpaperService,
      {  provide: 'WALLPAPER_TYPEE_PROVIDERS',useValue: WallpaperTypeModel},
      {  provide: 'WALLPAPER_PROVIDERS',useValue: WallpaperModel},
  ]
})
export class WallpaperModule{}
