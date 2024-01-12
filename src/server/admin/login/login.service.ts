import {Inject, Injectable, Logger} from '@nestjs/common';
import {LoginDto} from "./dto/login.dto";
import * as process from "process";
import {Response,Request} from "express";
import {ResFail, ResSuccess} from "../../../utils/http.response";
import {CACHE_MANAGER} from "@nestjs/common/cache";
import {Cache} from "cache-manager";
import md5 from 'md5'
import {v4 as uuid} from "uuid";
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
        let str:string = md5(uuid()+new Date().getTime().toString())
        let val = Buffer.from(str,'utf-8').toString('base64')
        let expired = Number(process.env.ADMIN_EXPIRED)
        await this.cacheManager.set('w_k', str, expired*1000);
        throw new ResSuccess(val)
    }
    testService(req:Request){
        Logger.log(req.ip)
        throw new ResFail(req.ip)
    }
}
