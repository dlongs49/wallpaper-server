import {HttpStatus, Inject, Injectable} from "@nestjs/common";
import {ResFail, ResSuccess} from "../../utils/http.response";
import {RequestDto} from "./dto/request.dto";
import {AuthenService} from "../../authen/authen.service";
import {Request} from "express";
import {JwtService} from "@nestjs/jwt";
import {IdDto, UserDto} from "./dto/user.dto";
import {PageReqDto} from "../../utils/global.dto";
import {SeqScreen} from "../../utils/tool";
import {v4 as uuid} from "uuid";
import {Op} from "sequelize";

@Injectable()
export class SignService {
    constructor(private authenService: AuthenService, private jwtService: JwtService, @Inject("SIGN_PROVIDERS") private readonly signProviders: any, @Inject("COLLECT_PROVIDERS") private readonly collectProviders: any, @Inject("WALLPAPER_PROVIDERS") private readonly wallpaper_providers: any) {
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
            await this.signProviders.update({
                sex,
                sex_tit: sex == '1' ? '男' : sex == '0' ? '女' : '保密'
            }, {where: {id}})
            data = "性别更新成功"
        }
        if (avatar && uname && sex) {
            throw new ResSuccess("个人信息更新成功")
        }
        throw new ResSuccess(data)
    }

    async setUerWallpaper(idDto: IdDto, req: Request,type:number) {
        // 查询壁纸是否存在
        const result = await this.wallpaper_providers.findOne({where: {id: idDto.wallpaper_id}, raw: true})
        if (!result) {
            throw new ResFail("该壁纸不存在")
        }
        // 查询是否收藏 根据用户id 和 壁纸id查询
        const isOn = await this.collectProviders.findOne({
            where: {
                [Op.and]: [{
                    user_id: req["uid"],
                    wallpaper_id: idDto.wallpaper_id,
                    opear_type: type, // 0 壁纸收藏  1 应用壁纸记录
                }]
            },
            raw: true
        })
        if (isOn) {
            await this.collectProviders.destroy({where: {id: isOn.id}})
            throw new ResSuccess(type == 0 ? "取消收藏成功" : "已取消应用壁纸")
        }
        await this.collectProviders.create({
            id: uuid(),
            user_id: req["uid"],
            wallpaper_id: idDto.wallpaper_id,
            wallpaper_title: result.title,
            wallpaper_url: result.url,
            wallpaper_type: result.url_type,
            opear_type: type,
            create_time: new Date()
        })
        throw new ResSuccess(type == 0 ? "收藏成功" : "应用壁纸成功")
    }

    async getUerWallpaper(pageReqDto: PageReqDto,type:number) {
        let offset = Number(pageReqDto.offset)
        let limit = Number(pageReqDto.limit)
        let order = [['opear_type',type]]
        const result = await this.collectProviders.findAndCountAll({
            ...SeqScreen(offset, limit,'','','',order),
            raw: true
        })
        throw new ResSuccess(result)
    }
}
