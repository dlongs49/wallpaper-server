/*
* Author:dinglong
* DateTime:2024/1/10 下午 10:47
*/
import { Request, Response, NextFunction } from 'express';
import {Inject, NestMiddleware} from "@nestjs/common";
import {CACHE_MANAGER} from "@nestjs/common/cache";
import {Cache} from 'cache-manager'
import {ResFail} from "./http.response";
// export const SessionMiddleware = (req: Request, res: Response, next: NextFunction)=>{
//     console.log()
//     next()
// }
export class SessionMiddleware implements  NestMiddleware{
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    }
    async use(req: Request, res: Response, next: NextFunction) {
        const value = await this.cacheManager.get('w_k');
        if(!value){
            throw new ResFail("登录失效")
        }
        next();
    }
}
