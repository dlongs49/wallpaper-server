import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiTags} from "@nestjs/swagger";
@ApiTags("用户管理")
@Controller("/user")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
