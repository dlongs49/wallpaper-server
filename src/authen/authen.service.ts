import {Inject, Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {ResFail, ResSuccess} from "../utils/http.response";
import {v4 as uid} from "uuid";
import * as md5 from "md5";
import * as process from "process";

@Injectable()
export class AuthenService {
    constructor(private jwtService: JwtService, @Inject("SIGN_PROVIDERS") private readonly signProviders: any) {
    }

    async validateUser(uname: string, password: string): Promise<any> {
        // 查找是否注册过
        const isRegister = await this.signProviders.findOne({
            where: {
                uname
            }
        });
        let id = uid()
        // 注册
        if (!isRegister) {
            if (uname.length > 10 || uname.length < 3) {
                throw new ResFail("用户名介于3至10个字符区间");
            }
            if (password.length < 4) {
                throw new ResFail("密码应大于3个字符");
            }
            await this.signProviders.create({
                id,
                uname,
                password: md5(password),
                reg_time: new Date(),
                sex: 1, // 0 女 1 男
                sex_tit: "男",
                nation: "中国"
            });
        } else {
            const result = await this.signProviders.findOne({
                where: {
                    uname,
                    password: md5(password)
                }
            });
            if (result == null) {
                throw new ResFail("密码错误,请检查!")
            }
            id = result.id
        }

        return this.jwtService.sign({sub: id, password}, {secret: process.env["JWTCONTENT_SECRET"]});
    }

    // getToken(user: ResponseDto) {
    //     const payload = {...user};
    //     return this.jwtService.sign(payload, {secret: process.env["JWTCONTENT_SECRET"]});
    // }
}
