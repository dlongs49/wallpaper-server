/*
* Author:dinglong
* DateTime:2024/1/3 下午 10:13
*/
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import process from "process";
// swagger 配置
export const swaggerConfig = (app) => {
    let mode = process.env.NODE_ENV
    const config = new DocumentBuilder()
        .setTitle('wallpaper-server')
        .setDescription('wallpaper-app接口服务')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(`${mode === 'dev' ? '' : 'wapi/'}api`, app, document); // http://localhost/api
}
