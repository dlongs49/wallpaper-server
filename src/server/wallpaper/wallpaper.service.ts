import {Inject, Injectable} from '@nestjs/common';
import {WallpaperTypeExDto, WallpaperTypeReqDto} from "./dto/wallpaper_type.dto";
import {v4 as uid} from "uuid";
import {ResFail, ResSuccess} from "../../utils/http.response";
import {FilterReqDto, PageReqDto} from "../../utils/global.dto";
import {SeqScreen} from "../../utils/tool";
import {WallpaperReqDto, WallpaperReqExDto} from "./dto/wallpaper.dto";

@Injectable()
export class WallpaperService {
    constructor(@Inject("WALLPAPER_TYPEE_PROVIDERS") private readonly wallpaper_type_providers: any,@Inject("WALLPAPER_PROVIDERS") private readonly wallpaper_providers: any) {
    }

    async setWallpaperType(wallpaperTypeResDto: WallpaperTypeReqDto) {
        if (!wallpaperTypeResDto.title) {
            throw new ResFail("分类标题不能为空")
        }
        if (wallpaperTypeResDto.title.length > 10 || wallpaperTypeResDto.title.length < 2) {
            throw new ResFail("分类标题在2至10个字符之间")
        }
        if (!wallpaperTypeResDto.cover_url) {
            throw new ResFail("封面不能为空")
        }
        let arr = [0, 1]
        if (!arr.includes(wallpaperTypeResDto.cover_type)) {
            throw new ResFail("封面类型参数不合法")
        }
        let dto = {
            id: uid(),
            create_time: new Date(),
            ...wallpaperTypeResDto
        }
        await this.wallpaper_type_providers.create(dto)
        throw new ResSuccess("操作成功")
    }

    async getWallpaperTypeDetail(id: string) {
        const result = await this.wallpaper_type_providers.findOne({where: {id}, raw: true})
        if (result) {
            throw new ResSuccess(result)
        } else {
            throw new ResFail("未查找到该条目")
        }
    }

    async updateWallpaperType(wallpaperTypeExDto: WallpaperTypeExDto) {
        let id = wallpaperTypeExDto.id
        const result_one = await this.wallpaper_type_providers.findOne({where: {id}})
        if (!result_one) {
            throw new ResFail("更新条目失败")
        }
        let dto = {
            title:wallpaperTypeExDto.title,
            cover_url:wallpaperTypeExDto.cover_url,
            cover_type:wallpaperTypeExDto.cover_type,
            create_time: new Date(),
        }
        await this.wallpaper_type_providers.update(dto, {where: {id}})
        throw new ResSuccess("更新条目成功")
    }

    async delWallpaperType(idArr: Array<string>) {
        let flag = false
        let for_id = ''
        for (let i = 0; i < idArr.length; i++) {
            const result = await this.wallpaper_type_providers.destroy({where: {id: idArr[i]}})
            if (result == 0) {
                flag = true
                for_id = idArr[i]
                break;
            } else {
                flag = false
            }
        }
        if (flag) {
            throw new ResSuccess(`删除id为{` + for_id + `}的条目失败`)
        }
        throw new ResSuccess("删除条目成功")
    }

    async getWallpaperTypeList(pageReqDto: PageReqDto, filterReqDto: FilterReqDto) {
        let kw = filterReqDto.keyword
        let sort = filterReqDto.sort_type
        let offset = Number(pageReqDto.offset)
        let limit = Number(pageReqDto.limit)
        const result = await this.wallpaper_type_providers.findAndCountAll({
            ...SeqScreen(offset,limit,kw,'title',sort),
            raw: true
        })
        throw new ResSuccess(result)
    }
    async setWallpaper(wallpaperReqDto: WallpaperReqDto) {
        if (!wallpaperReqDto.title) {
            throw new ResFail("壁纸标题不能为空")
        }
        if (wallpaperReqDto.title.length > 10 || wallpaperReqDto.title.length < 2) {
            throw new ResFail("壁纸标题在2至10个字符之间")
        }
        const result = await this.wallpaper_type_providers.findOne({where:{id:wallpaperReqDto.type_id},raw:true})
        if (!wallpaperReqDto.type_id) {
            throw new ResFail("壁纸类型必传")
        }
        if(!result){
            throw new ResFail("未查到该壁纸类型")
        }
        if (!wallpaperReqDto.url) {
            throw new ResFail("封面不能为空")
        }
        let arr = [0, 1]
        if (!arr.includes(wallpaperReqDto.url_type)) {
            throw new ResFail("壁纸链接类型不合法")
        }
        let dto = {
            id: uid(),
            create_time: new Date(),
            type_name:result.title,
            ...wallpaperReqDto
        }
        await this.wallpaper_providers.create(dto)
        throw new ResSuccess("操作成功")
    }
    async getWallpaperDetail(id: string) {
        const result = await this.wallpaper_providers.findOne({where: {id}, raw: true})
        if (result) {
            throw new ResSuccess(result)
        } else {
            throw new ResFail("未查找到该条目")
        }
    }
    async updateWallpaper(wallpaperReqExDto: WallpaperReqExDto) {
        let id = wallpaperReqExDto.id
        const result_one = await this.wallpaper_type_providers.findOne({where: {id}})
        if (!result_one) {
            throw new ResFail("更新条目失败")
        }
        let dto = {
            title:wallpaperReqExDto.title,
            url:wallpaperReqExDto.url,
            url_type:wallpaperReqExDto.url_type,
            type_id:wallpaperReqExDto.type_id,
            create_time: new Date(),
            type_name:result_one.type_name,

        }
        await this.wallpaper_type_providers.update(dto, {where: {id}})
        throw new ResSuccess("更新条目成功")
    }

    async delWallpaper(idArr: Array<string>) {
        let flag = false
        let for_id = ''
        for (let i = 0; i < idArr.length; i++) {
            const result = await this.wallpaper_providers.destroy({where: {id: idArr[i]}})
            if (result == 0) {
                flag = true
                for_id = idArr[i]
                break;
            } else {
                flag = false
            }
        }
        if (flag) {
            throw new ResSuccess(`删除id为{` + for_id + `}的条目失败`)
        }
        throw new ResSuccess("删除条目成功")
    }
    async getWallpaperList(pageReqDto: PageReqDto, filterReqDto: FilterReqDto) {
        let kw = filterReqDto.keyword
        let sort = filterReqDto.sort_type
        let offset = Number(pageReqDto.offset)
        let limit = Number(pageReqDto.limit)
        const result = await this.wallpaper_providers.findAndCountAll({
            ...SeqScreen(offset,limit,kw,'title',sort),
            raw: true
        })
        throw new ResSuccess(result)
    }
}
