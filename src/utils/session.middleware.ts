/*
* Author:dinglong
* DateTime:2024/1/10 下午 10:47
*/
import { Request, Response, NextFunction } from "express";
import { Inject, NestMiddleware } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/common/cache";
import { Cache } from "cache-manager";
import { Status } from "./status";

export class SessionMiddleware implements NestMiddleware {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const value = await this.cacheManager.get("w_k");
    let w_k = req.headers.w_k ? req.headers.w_k.toString() : "";
    let val = Buffer.from(w_k, "base64").toString("utf-8");
    if (req.path === "/api/login/admin_login") {
      next();
    }
    if (!value || !w_k) {
      await this.cacheManager.del("w_k");
      return res.send({ code: Status.NOSIGN, msg: "令牌失效,重新登录" });
    }
    if (val != value) {
      await this.cacheManager.del("w_k");
      return res.send({ code: Status.NOSIGN, msg: "令牌不正确" });
    }
    next();
  }
}
