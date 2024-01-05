import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DbModule } from "../config/db.module";
import { SignModule } from "./sign/sign.module";
import { Sign } from "./sign/sign.model";
import { AuthenModule } from "../authen/authen.module";
import { AuthenService } from "../authen/authen.service";


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env" }),
    DbModule,
    SignModule
  ],
  controllers: [
  ],
  providers: [
    {
      provide: "SIGN_PROVIDERS",
      useValue: Sign
    }]
})
export class AppModule {
}
