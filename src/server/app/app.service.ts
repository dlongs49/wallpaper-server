import { Inject, Injectable } from "@nestjs/common";
import { App } from "./app.model";
import { User } from "./app";

@Injectable()
export class AppService {
  constructor(@Inject("App_REPOSITORY") private readonly appProviders: typeof App) {
  }
  async sign(user:User ){

    return this.appProviders.create({
      id:new Date().getTime().toString(),
      uname:user.username,
      password:user.password
    })
  }
  async findAll(){
    return this.appProviders.findAll()
  }
}
