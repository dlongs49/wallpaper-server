import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {DbModule} from "../config/db.module";
import {SignModule} from "./sign/sign.module";
import {Sign} from "./sign/sign.model";
import {UploadModule} from "./upload/upload.module";
import { WallpaperController } from './wallpaper/wallpaper.controller';
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
    // providers: [
    //     {
    //         provide: "SIGN_PROVIDERS",
    //         useValue: Sign
    //     }]
})
export class AppModule {
}
