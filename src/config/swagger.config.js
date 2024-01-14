"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
/*
* Author:dinglong
* DateTime:2024/1/3 下午 10:13
*/
var swagger_1 = require("@nestjs/swagger");
// swagger 配置
var swaggerConfig = function (app) {
    var config = new swagger_1.DocumentBuilder()
        .setTitle('wallpaper-server')
        .setDescription('wallpaper-app接口服务')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    var document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document); // http://localhost/api
};
exports.swaggerConfig = swaggerConfig;
