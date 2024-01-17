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
import history from "connect-history-api-fallback"
async function bootstrap() {
    let node_env = process.env.NODE_ENV
    Logger.debug("环境：" + node_env)
    const app = await NestFactory.create(AppModule, {
        logger: WinstonModule.createLogger({
            instance: LogInstace()
        })
    });
    app.setGlobalPrefix('api'); // 路由前缀
    app.useGlobalFilters(new HttpAllFilter(), new HttpFilter())
    let file_path = join(__dirname, node_env == 'dev' ? '..' : '.')
    app.use('/upload', express.static(join(file_path, 'www/public'))); // 静态资源开放
    swaggerConfig(app) // swagger抽出
    app.use('/*', express.static(join(file_path, 'www/client'))); // 静态资源开放
    app.use(history());
    app.enableCors(); // 解决跨域
    await app.listen(process.env.SERVER_POTY);
}

bootstrap();
