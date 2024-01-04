import { Module } from '@nestjs/common';
import {AuthenService} from "../../authen/authen.service";
import {AuthenModule} from "../../authen/authen.module";
import {JwtService} from "@nestjs/jwt";
import { ConfigModule } from '@nestjs/config';
import { DbModule } from "../../config/db.module";
import {SignModule} from "../sign/sign.module";
import { Sign } from "../sign/sign.model";
@Module({
  imports: [AuthenModule,ConfigModule.forRoot({envFilePath:'.env'}),DbModule,SignModule],
  controllers: [],
  providers: [AuthenService,JwtService,{
    provide: 'SIGN_PROVIDERS',
    useValue: Sign,
  },],
})
export class AppModule {}
