import {MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {DbModule} from "@/config/db.module";
import {SignModule} from "./sign/sign.module";
import {UploadModule} from "./upload/upload.module";
import {WallpaperModule} from './wallpaper/wallpaper.module';
import {LoginModule} from "./admin/login/login.module";
import {SessionMiddleware} from "@/utils/session.middleware";
import {SignController} from "./sign/sign.controller";
import {LoginController} from "./admin/login/login.controller";
import {WallpaperController} from "./wallpaper/wallpaper.controller";
import {CacheModule} from "@nestjs/common/cache";


@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true, envFilePath: ".env"}),
        DbModule,
        SignModule,
        UploadModule,
        WallpaperModule,
        CacheModule.register(),
        LoginModule
    ],
    controllers: [],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(SessionMiddleware).exclude(
            {path: "sign/(.*)", method: RequestMethod.ALL},
            {path: "upload/(.*)", method: RequestMethod.ALL},
            {path: "wallpaper/app/(.*)", method: RequestMethod.ALL},
            {path: "login/admin_login", method: RequestMethod.ALL},
            {path: "login/test", method: RequestMethod.ALL},
        ).forRoutes(SignController, WallpaperController, LoginController)
    }
}
