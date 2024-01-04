import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenService } from './authen.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthenService) {
    super({
      usernameField: 'uname',
      passwordField: 'password',
    })
  }

  async validate(uname: string, password: string): Promise<any> {

    console.log(uname,password);
    const user = await this.authService.validateUser(uname, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
