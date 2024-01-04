import {Module} from '@nestjs/common';
import {AuthenService} from './authen.service';
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {JwtStrategy} from "./jwt.strategy";
import {JwtModule} from '@nestjs/jwt';
import { Sign } from "../server/sign/sign.model";
import * as process from "process";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            global: true,
            secret: process.env['JWTCONTENT_SECRET'],
            signOptions: {expiresIn: process.env["JWTCONTENT_EXPIREIN"]},
        }),
    ],
    providers: [
        AuthenService,
        LocalStrategy,
        JwtStrategy,
        {
            provide: 'SIGN_PROVIDERS',
            useValue: Sign,
        },
    ],
})
export class AuthenModule {
}
