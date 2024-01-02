import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiTags} from "@nestjs/swagger";
@ApiTags("用户管理")
@Controller("sign")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/reg_login")
  getHello(): string {
    return this.appService.getHello();
  }
}
