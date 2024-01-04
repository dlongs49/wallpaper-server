import {Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ResFail } from "../utils/http.response";
import { v4 as uid } from "uuid";
import * as md5 from "md5";
import * as process from "process";

@Injectable()
export class AuthenService {
  constructor(private jwtService: JwtService, @Inject("SIGN_PROVIDERS") private readonly signProviders: any) {
  }

  async validateUser(uname: string, password: string): Promise<any> {
    // 查找是否注册过
    const result = await this.signProviders.findOne({
      where: {
        uname,
        password
      }
    });
    // 注册
    if (!result) {
      if (uname.length > 10 || uname.length < 3) {
        throw new ResFail("用户名介于3至10个字符区间");
      }
      if (password.length < 4) {
        throw new ResFail("密码应大于3个字符");
      }
      await this.signProviders.create({
        id: uid(),
        uname,
        password: md5(password),
        reg_time: new Date(),
        sex: 1, // 0 女 1 男
        sex_tit: "男",
        nation: "中国"
      });
    }
    return { uname, password };
  }

  getToken(user:ResponseDto) {
    const payload = { ...user };
    return this.jwtService.sign(payload, { secret: process.env["JWTCONTENT_SECRET"] } );
  }
}
