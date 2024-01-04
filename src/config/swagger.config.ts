/*
* Author:dinglong
* DateTime:2024/1/3 下午 10:13
*/
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
// swagger 配置
export const swaggerConfig = (app) => {
    const config = new DocumentBuilder().addBearerAuth()
        .setTitle('wallpaper-server')
        .setDescription('wallpaper-app接口服务')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document); // http://localhost/api
}
