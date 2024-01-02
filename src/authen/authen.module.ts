import { Module } from '@nestjs/common';
import { AuthenService } from './authen.service';
import { AppModule } from "../server/app/app.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtStrategy } from "./jwt.strategy";
import { jwtConstants } from "./constants";
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports:[
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    AppModule,
  //   PassportModule,JwtModule.register({
  //   secret: jwtConstants.secret,
  //   signOptions: { expiresIn: '1200s' },
  // }),
  ],
  providers: [AuthenService,
    // LocalStrategy,
    // JwtStrategy
  ],
})
export class AuthenModule {}
