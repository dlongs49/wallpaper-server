import { HttpException, HttpStatus } from "@nestjs/common";
import { Status } from "./status";
// 成功响应
export class ResSuccess<T> extends HttpException{
  constructor(data:T) {
    let msg = 'ok::' + new Date().getTime()
    super({code:Status.OK,msg,data},HttpStatus.OK);
  }
}
// 失败响应
export class ResFail extends HttpException{
  constructor(msg:string = "出现错误") {
    super({code:Status.FAIL,msg},HttpStatus.OK);
  }
}