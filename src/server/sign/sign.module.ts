import { Module } from '@nestjs/common';
import { SignService } from './sign.service';
import { SignController } from "./sign.controller";
import { AuthenService } from "../../authen/authen.service";
import { AuthenModule } from "../../authen/authen.module";
import { Sign } from "./sign.model";

@Module({
  imports:[
    AuthenModule,
  ],
  controllers:[SignController],
  providers: [
    SignService,
    AuthenService,
    {
    provide: 'SIGN_PROVIDERS',
    useValue: Sign,
  },]
})
export class SignModule {}
