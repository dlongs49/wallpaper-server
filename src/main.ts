import {NestFactory} from '@nestjs/core';
import {AppModule} from './server/app.module';
import {swaggerConfig} from "./config/swagger.config";
import {HttpAllFilter, HttpFilter} from "./utils/http.filter";
import {join} from 'path'
import * as express from 'express';
import cookieParser from 'cookie-parser'
import * as process from "process";
import session from "express-session";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser(process.env.COOKEIS_KEY));
    // app.use(
    //     session({
    //         secret: '__wa__',
    //         cookie: {maxAge: 10000, httpOnly: true, signed: false},
    //         rolling: true,
    //         saveUninitialized: false,
    //         name: 'wa_suid',
    //         resave: false
    //     }),
    // );
    app.setGlobalPrefix('api'); // 路由前缀
    app.useGlobalFilters(new HttpAllFilter(), new HttpFilter())
    let file_path = join(__dirname, '..')
    app.use('/upload', express.static(join(file_path, 'www/public'))); // 静态资源开放
    app.use('/', express.static(join(file_path, 'www/client'))); // 静态资源开放
    swaggerConfig(app) // swagger抽出
    app.enableCors(); // 解决跨域
    await app.listen(process.env.SERVER_POTY);
}

bootstrap();
