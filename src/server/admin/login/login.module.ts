import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import {LoginService} from "./login.service";
import {CacheModule} from "@nestjs/common/cache";

@Module({
  imports:[CacheModule.register()],
  controllers: [LoginController],
  providers:[LoginService]
})
export class LoginModule {}
