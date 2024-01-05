/*
* Author:dinglong
* DateTime:2024/1/4 下午 9:26
*/
import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as process from "process";
import { Status } from "../utils/status";

@Injectable()
export class AuthenGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    let [type, token] = request.headers.authorization?.split(" ") ?? [];
    if (!token) {
      throw new HttpException({ code: Status.NOSIGN, msg: "未登录" }, HttpStatus.OK);
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, { secret: '123456' });
      request["id"] = payload.uid;
      return true;
    } catch (e) {
      console.log("JWT异常:", e.message);
      throw new HttpException({ code: Status.NOSIGN, msg: "未登录" }, HttpStatus.OK);
    }
  }
}