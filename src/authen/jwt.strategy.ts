import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import {JwtContent} from '../utils/jwt.content';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      algorithms:["RS256"],
      secretOrKey: JwtContent.JWTCONTENT_SECRET,
    });
  }

  validate(payload: any) {
    return payload
  }
}
