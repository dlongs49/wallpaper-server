/*
* Author:dinglong
* DateTime:2024/1/4 下午 9:26
*/
import {CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, Logger} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import * as process from "process";
import {Status} from "../utils/status";

@Injectable()
export class AuthenGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
    private logger = new Logger()
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest()
        let [type, token] = request.headers.authorization?.split(" ") ?? []
        if (!token) {
            throw new HttpException({code: Status.NOSIGN, msg: "未登录"}, HttpStatus.OK)
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {secret: process.env["JWTCONTENT_SECRET"]})
            request["uid"] = payload.uid
        } catch (e) {
            this.logger.warn("TOKEN异常:", e)
            throw  new HttpException({code: Status.NOSIGN, msg: "未登录"}, HttpStatus.OK)
        }
        return true
    }
}
