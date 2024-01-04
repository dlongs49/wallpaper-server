import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthenService } from './authen.service';
import { ResFail } from "../utils/http.response";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthenService) {
    super({
      usernameField: 'uname',
      passwordField: 'password',
    })
  }

  async validate(uname: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(uname, password);
    if (!user) {
      throw new ResFail("登录或注册失败")
    }
    return user
  }
}
