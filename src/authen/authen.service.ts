import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ResFail, ResSuccess } from "../utils/http.response";
import { v4 as uuid } from "uuid";
import md5 from "md5";
import { Request, Response } from "express";
import * as process from "process";
import { getNation } from "../utils/tool";

@Injectable()
export class AuthenService {
  constructor(private jwtService: JwtService, @Inject("SIGN_PROVIDERS") private readonly signProviders: any) {
  }

  async validateSign(uname: string, password: string, req: Request, res: Response): Promise<object> {
    // 查找是否注册过
    const isRegister = await this.signProviders.findOne({
      where: {
        uname
      }
    });
    let id = uuid();
    // 注册
    if (!isRegister) {
      if (uname.length > 10 || uname.length < 3) {
        return new ResFail("用户名介于3至10个字符区间");
      }
      if (password.length < 4) {
        return new ResFail("密码应大于3个字符");
      }

      await this.signProviders.create({
        id,
        uname,
        password: md5(password, { encoding: process.env.MD5_KEY }),
        reg_time: new Date(),
        sex: 1, // 0 女 1 男
        sex_tit: "男",
        nation: getNation(req)
      });
    } else {
      const result = await this.signProviders.findOne({
        where: {
          uname,
          password: md5(password, { encoding: process.env.MD5_KEY })
        }
      });
      if (result == null) {
        return new ResFail("密码错误,请检查!");
      }
      id = result.id;
      // 更新地区信息
      await this.signProviders.update({ nation: getNation(req) }, { where: { id } });
    }
    let token = this.jwtService.sign({ uid: id, password: md5(password) })
    return new ResSuccess(token)
  }
}
