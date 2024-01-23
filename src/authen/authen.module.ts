import {Module} from '@nestjs/common';
import {AuthenService} from './authen.service';
import {JwtModule} from '@nestjs/jwt';
import {SignModel} from "@/server/sign/model/sign.model";
import {JwtStrategy} from "./jwt.strategy";
import {JwtContent} from "@/utils/jwt.content";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: JwtContent.JWTCONTENT_SECRET,
            signOptions: {expiresIn: JwtContent.JWTCONTENT_EXPIREIN},
        }),
    ],
    providers: [
        AuthenService,
        JwtStrategy,
        {
            provide: 'SIGN_PROVIDERS',
            useValue: SignModel,
        },
    ],
})
export class AuthenModule {
}
