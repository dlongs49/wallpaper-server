/*
* Author:dinglong
* DateTime:2024/1/4 下午 9:26
*/
import {CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, Logger} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {ResFail} from "../utils/http.response";
import * as process from "process";
import {Status} from "../utils/status";

@Injectable()
export class AuthenGuard implements CanActivate {
    constructor(private jwtService: JwtService) {
    }

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest()
        let [type, token] = request.headers.authorization?.split(" ") ?? []
        if (!token) {
            throw new HttpException({code: Status.NOSIGN, msg: "未登录"}, HttpStatus.OK)
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {secret: process.env["JWTCONTENT_SECRET"]})
            console.log("PAYLOAD:", payload)

        } catch (e) {
            console.log("异常：", e)
            throw  new HttpException({code: Status.NOSIGN, msg: "未登录"}, HttpStatus.OK)
        }
        return true
    }
}
