import {Body, Controller, Get, Injectable, Post, UseGuards} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";
import {User} from './app'
import {AuthenService} from "../../authen/authen.service";
import {AppService} from "./app.service";

@ApiTags("用户管理")
@Controller("sign")
export class AppController {
    constructor(private authenService: AuthenService,private appService: AppService) {}
    @UseGuards(AuthGuard('local'))
    @Post("/reg_login")
    login(@Body() user: User): any {
        let token = this.authenService.getToken(user);
        return {token};
    }
}
