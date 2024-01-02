import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthenService} from "../../authen/authen.service";
import {AuthenModule} from "../../authen/authen.module";
import {JwtService} from "@nestjs/jwt";
@Module({
  imports: [AuthenModule],
  controllers: [AppController],
  providers: [AppService,AuthenService,JwtService],
})
export class AppModule {}
