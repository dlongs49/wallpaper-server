import {HttpStatus, Inject, Injectable} from "@nestjs/common";
import {ResSuccess} from "../../utils/http.response";
import {RequestDto} from "./dto/request.dto";
import {AuthenService} from "../../authen/authen.service";
import {Request} from "express";
import {JwtService} from "@nestjs/jwt";
import {UserDto} from "./dto/user.dto";
import {PageReqDto} from "../../utils/global.dto";

@Injectable()
export class SignService {
    constructor(private authenService: AuthenService, private jwtService: JwtService, @Inject("SIGN_PROVIDERS") private readonly signProviders: any) {
    }

    async loginReg(requestDto: RequestDto) {
        let token = await this.authenService.validateSign(requestDto.uname, requestDto.password);
        throw new ResSuccess(token);
    }

    async getUser(req: Request) {
        let id = req["uid"]
        const result = await this.signProviders.findOne({where: {id}, raw: true})
        delete result.password
        delete result.id
        throw new ResSuccess(result);
    }

    async updateUser(userDto: UserDto, request: Request) {
        let id = request['uid']
        let avatar = userDto.avatar
        let uname = userDto.uname
        let sex = userDto.sex
        let data = ""
        if (avatar) {
            await this.signProviders.update({avatar}, {where: {id}})
            data = "头像更新成功"
        }
        if (uname) {
            await this.signProviders.update({uname}, {where: {id}})
            data = "用户名更新成功"
        }
        if (sex) {
            await this.signProviders.update({sex,sex_tit:sex == '1' ? '男' : sex == '0' ? '女' : '保密'}, {where: {id}})
            data = "性别更新成功"
        }
        if(avatar && uname && sex){
            throw new ResSuccess("个人信息更新成功")
        }
        throw new ResSuccess(data)
    }
    async getUerCollect(pageReqDto,PageReqDto){

    }
}
