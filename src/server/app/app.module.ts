import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthenService} from "../../authen/authen.service";
import {AuthenModule} from "../../authen/authen.module";
import {JwtService} from "@nestjs/jwt";
import { ConfigModule } from '@nestjs/config';
import { DbModule } from "../../config/db.module";
import { appProviders } from "./app.providers";
import {SignModule} from "../sign/sign.module";
import {SignService} from "../sign/sign.service";
import { Sign } from "../sign/sign.model";
@Module({
  imports: [AuthenModule,ConfigModule.forRoot({envFilePath:'.env'}),DbModule,SignModule],
  controllers: [AppController],
  providers: [AppService,AuthenService,JwtService,...appProviders,{
    provide: 'SIGN_PROVIDERS',
    useValue: Sign,
  },],
})
export class AppModule {}
