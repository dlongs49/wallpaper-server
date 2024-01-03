import { Body, Controller, Get, HttpCode, HttpStatus, Injectable, Post, Res, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { User } from "./app";
import { AuthenService } from "../../authen/authen.service";
import { AppService } from "./app.service";
import { JwtStrategy } from "../../authen/jwt.strategy";
import * as process from "process";

@ApiTags("用户管理")
@Controller("/sign")
export class AppController {
  constructor(private authenService: AuthenService, private appService: AppService) {
  }

  @UseGuards(AuthGuard("local"))
  @Post("/reg_login")
  login(@Body() user: User): any {
    this.appService.sign(user)
    let token = this.authenService.getToken(user);
    return { token };
  }

  @UseGuards(JwtStrategy)
  @Post("/find")
  findAll() {
    return this.appService.findAll();
  }
}
