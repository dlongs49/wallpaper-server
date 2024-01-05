/*
* Author:dinglong
* DateTime:2024/1/4 下午 9:26
*/
import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as process from "process";
import { Status } from "../utils/status";
import {JwtContent} from "../utils/jwt.content";

@Injectable()
export class AuthenGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    let [type, token] = request.headers.authorization?.split(" ") ?? [];
    if (!token) {
      // throw new HttpException({ code: Status.NOSIGN, msg: "未登录" }, HttpStatus.OK);
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, { secret: JwtContent.JWTCONTENT_SECRET });
      request["id"] = payload.uid;
      return true;
    } catch (e) {
      console.log("JWT异常:", e.message);
      /**
       *  jwt expired 【token过期】
       *  invalid signature 【token 签名错误】
       *  jwt must be provided 【token为空】
       *  jwt malformed 【token格式不合法】
      */

      throw new HttpException({ code: Status.NOSIGN, msg: "未登录" }, HttpStatus.OK);
    }
  }
}
