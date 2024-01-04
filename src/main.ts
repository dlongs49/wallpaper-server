import { NestFactory } from '@nestjs/core';
import { AppModule } from './server/app/app.module';
import {swaggerConfig} from "./config/swagger.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('wallpaper_api'); // 路由前缀
  swaggerConfig(app) // swagger抽出
  await app.listen(process.env.SERVER_POTY);
}
bootstrap();
