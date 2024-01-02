import { Controller, Get, Injectable, UseGuards } from "@nestjs/common";
import { AppService } from './app.service';
import {ApiTags} from "@nestjs/swagger";
import { LocalAuthGuard } from "../../authen/local-auth.guard";
import { AuthGuard } from "@nestjs/passport";
@ApiTags("用户管理")
@Controller("sign")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @UseGuards(AuthGuard('local'))
  @Get("/reg_login")
  getHello(): object {
    return this.appService.findOne();
  }
}
