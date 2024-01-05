/*
* Author:dinglong
* DateTime:2024/1/5 下午 9:40
*/
import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException, ServiceUnavailableException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import {Status} from "./status";
// 拦截 全局 异常
@Catch()
export class HttpAllFilter implements ExceptionFilter {
    catch(ex: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const r:any = new ServiceUnavailableException().getResponse();
        response.status(200).send({
            code:Status.ERROR,
            msg:r.message,
            status:r.statusCode
        })

    }
}
// 拦截 Http 异常
@Catch(HttpException)
export class HttpFilter implements ExceptionFilter {
    catch(ex: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        let r:any = ex.getResponse()
          if(r.code){
              response.status(200).send(r)
          }else{
              response.status(200).send({
                  code:Status.ERROR,
                  msg:r.message,
                  status:r.statusCode
              })
          }

    }
}