import { NestFactory } from '@nestjs/core';
import { AppModule } from './server/app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('wallpaper-server')
      .setDescription('wallpaper-app接口服务')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.SERVER_POTY);
}
bootstrap();
