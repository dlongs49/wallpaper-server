import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {jwtConstants} from "./constants";

@Injectable()
export class AuthenService {
    constructor(private jwtService:JwtService) {}

    async validateUser(username: string, password: string): Promise<any> {
        if (username != 'test') {
            throw new HttpException({
                code: 401,
                msg: "用户名不存在"
            },HttpStatus.OK)
        }
        if (password != '123456') {
            throw new UnauthorizedException({
                code: 401,
                msg: "密码不正确"
            })
        }
        return {username, password}

    }
    getToken(user) {
        const payload = { ...user };
        return this.jwtService.sign(payload, { secret: jwtConstants.secret } );
    }
}
