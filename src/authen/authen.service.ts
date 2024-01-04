import { HttpException, HttpStatus, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import { ResSuccess } from "../utils/http.response";
import { RequestDto } from "../server/sign/dto/request.dto";

@Injectable()
export class AuthenService {
    constructor(private jwtService:JwtService,@Inject("SIGN_PROVIDERS") private readonly signProviders: any) {}

    async validateUser(uname: string, password: string): Promise<any> {
        const result = await this.signProviders.findOne({
            where:{
                uname,
                password
            }
        })
        await this.signProviders.create()
        throw  new ResSuccess(result)
        // if (username != 'test') {
        //     throw new HttpException({
        //         code: 401,
        //         msg: { username,password }
        //     },HttpStatus.OK)
        // }
        // if (password != '123456') {
        //     throw new UnauthorizedException({
        //         code: 401,
        //         msg: "密码不正确"
        //     })
        // }
        // return {username, password}
    }
    getToken(user) {
        // const payload = { ...user };
        // return this.jwtService.sign(payload, { secret: jwtConstants.secret } );
    }
}
