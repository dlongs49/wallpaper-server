import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {DbModule} from "../config/db.module";
import {SignModule} from "./sign/sign.module";
import {UploadModule} from "./upload/upload.module";
import { WallpaperModule } from './wallpaper/wallpaper.module';


@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true, envFilePath: ".env"}),
        DbModule,
        SignModule,
        UploadModule,
        WallpaperModule
    ],
    controllers: [],
})
export class AppModule {
}
