import {NestFactory} from '@nestjs/core';
import {AppModule} from './server/app.module';
import {swaggerConfig} from "./config/swagger.config";
import {HttpAllFilter, HttpFilter} from "./utils/http.filter";
import {join} from 'path'
import * as express from 'express';
import * as process from "process";
import {WinstonModule} from "nest-winston";
import LogInstace from "./utils/winston.log";
import {Logger} from "@nestjs/common";
import accessIp from './access_ip'
async function bootstrap() {
    let mode = process.env.NODE_ENV
    Logger.debug("环境：" + mode)
    const app = await NestFactory.create(AppModule, {
        logger: WinstonModule.createLogger({
            instance: LogInstace()
        })
    });
    app.setGlobalPrefix(`${mode === 'dev' ? '' : 'wapi'}/api`); // 路由前缀
    app.useGlobalFilters(new HttpAllFilter(), new HttpFilter())
    let file_path = join(__dirname, mode == 'dev' ? '..' : '.')
    app.use(`${mode === 'dev' ? '' : '/wapi'}/upload`, express.static(join(file_path, 'www/public'))); // 静态资源开放
    swaggerConfig(app) // swagger抽出
    app.use(`${mode === 'dev' ? '/' : '/wapi'}`, express.static(join(file_path, 'www/client'))); // 静态资源开放
    app.enableCors(); // 解决跨域
    accessIp(app)
   
    await app.listen(process.env.SERVER_POTY,'0.0.0.0');
}

bootstrap();
