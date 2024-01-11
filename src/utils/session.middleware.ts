/*
* Author:dinglong
* DateTime:2024/1/10 下午 10:47
*/
import { Request, Response, NextFunction } from 'express';
import {HttpException, HttpStatus, Inject, NestMiddleware} from "@nestjs/common";
import {CACHE_MANAGER} from "@nestjs/common/cache";
import {Cache} from 'cache-manager'
import {ResFail} from "./http.response";
import {Status} from "./status";
export class SessionMiddleware implements  NestMiddleware{
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    }
    async use(req: Request, res: Response, next: NextFunction) {
        const value = await this.cacheManager.get('w_k');
        const w_k = req.headers.w_k.toString()
        if(req.path === '/api/login/admin_login'){
            next()
        }
        let val = Buffer.from(w_k,'base64').toString('utf-8')
        if(!value || !w_k){
            throw new HttpException({ code: Status.NOSIGN, msg: "令牌失效,重新登录" }, HttpStatus.OK);
        }
        if(val != value){
            throw new HttpException({ code: Status.NOSIGN, msg: "令牌不正确" }, HttpStatus.OK);
        }
        next();
    }
}
