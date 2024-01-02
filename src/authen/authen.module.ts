import {Module} from '@nestjs/common';
import {AuthenService} from './authen.service';
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {JwtStrategy} from "./jwt.strategy";
import {jwtConstants } from "./constants";
import {JwtModule, JwtService} from '@nestjs/jwt';
import {AppModule} from "../server/app/app.module";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: jwtConstants.expiresIn},
        }),
    ],
    providers: [
        AuthenService,
        LocalStrategy,
        JwtStrategy
    ],
})
export class AuthenModule {
}
