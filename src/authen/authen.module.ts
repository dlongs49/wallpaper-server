import {Module} from '@nestjs/common';
import {AuthenService} from './authen.service';
import {JwtModule} from '@nestjs/jwt';
import { Sign } from "../server/sign/sign.model";
import * as process from "process";
import { JwtStrategy } from "./jwt.strategy";
@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: "wallpaper123", // process.env['JWTCONTENT_SECRET']
            signOptions: {expiresIn: "15s" }, // process.env['JWTCONTENT_EXPIREIN']
        }),
    ],
    providers: [
        AuthenService,
        JwtStrategy,
        {
            provide: 'SIGN_PROVIDERS',
            useValue: Sign,
        },
    ],
})
export class AuthenModule {
}
