import {Inject, Injectable} from '@nestjs/common';
import {LoginDto} from "./dto/login.dto";
import * as process from "process";
import {Response,Request} from "express";
import {ResFail, ResSuccess} from "../../../utils/http.response";
import {CACHE_MANAGER} from "@nestjs/common/cache";
import {Cache} from "cache-manager";
import md5 from 'md5'
@Injectable()
export class LoginService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    }
    async adminLogin(loginDto: LoginDto, res: Response) {
        let ac = process.env.ADMIN_ACCOUNT
        let pwd = process.env.ADMIN_PASSWORD
        if (ac != loginDto.account || pwd != loginDto.password) {
            throw new ResFail("账号或密码错误")
        }
        let val = md5(ac) + new Date().getTime()
        let expired = Number(process.env.COOKIES_EXPIRED)
        res.cookie('w_k', val, {maxAge: expired*1000, httpOnly: true, signed: true})
        await this.cacheManager.set('w_k', val, expired*1000);
        throw new ResSuccess('登录成功')
    }
    test(req:Request){
        throw new ResSuccess(req.ip)
    }
}
