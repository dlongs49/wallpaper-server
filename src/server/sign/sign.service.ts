import {HttpStatus, Inject, Injectable} from "@nestjs/common";
import {ResSuccess} from "../../utils/http.response";
import {RequestDto} from "./dto/request.dto";
import {AuthenService} from "../../authen/authen.service";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class SignService {
    constructor(private authenService: AuthenService,private jwtService:JwtService, @Inject("SIGN_PROVIDERS") private readonly signProviders: any) {
    }
    async loginReg(requestDto: RequestDto) {
        let token = await this.authenService.validateSign(requestDto.uname, requestDto.password);
        throw new ResSuccess(token);
    }

    async getUser(req: Request) {
        let id = req["id"]
        const result = await this.signProviders.findOne({where: {id},raw:true})
        delete  result.password
        delete  result.id
        throw new ResSuccess(result);
    }
}
