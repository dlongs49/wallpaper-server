import { NestFactory } from '@nestjs/core';
import { AppModule } from './server/app.module';
import {swaggerConfig} from "./config/swagger.config";
import {HttpAllFilter, HttpFilter} from "./utils/http.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('wallpaper_api'); // 路由前缀
  app.useGlobalFilters(new HttpAllFilter(), new HttpFilter())
  swaggerConfig(app) // swagger抽出
  await app.listen(process.env.SERVER_POTY);
}
bootstrap();
