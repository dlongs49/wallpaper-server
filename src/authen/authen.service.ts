import { Injectable } from '@nestjs/common';
import {AppService} from '../server/app/app.service'
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthenService {
  constructor(private readonly appService: AppService,private readonly jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.appService.findOne();
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
