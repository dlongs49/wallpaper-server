import {Inject, Injectable} from "@nestjs/common";
import {ResFail, ResSuccess} from "@/utils/http.response";
import {PageReqDto} from "@/utils/global.dto";
import sequelize from 'sequelize';

@Injectable()
export class StatisService {
    constructor(@Inject("STATIS_PROVIDERS") private readonly statisProviders: any, ) {
    }
    async getAccessRecord(pageReqDto: PageReqDto) {
        let offset = Number(pageReqDto.offset);
        let limit = Number(pageReqDto.limit);
        let of = (offset - 1) * limit
        const result = await this.statisProviders.findAndCountAll({
            offset: of === 0 ? 0 : of,
            limit: limit,
            order:[['access_time','desc']],
            raw: true
        })
        return new ResSuccess(result);
    }
    async getAccessStatis(key: string) {
        let column_key = key || 'country'
        const result = await this.statisProviders.findAll({
            attributes:[column_key, [sequelize.fn('COUNT', sequelize.col(column_key)), 'count'],],
            group: column_key,
            raw: true
        }).then((data:any)=>{
            let arr = []
            let count = []
            for (let i = 0; i < data.length; i++) {
                arr.push(data[i]['column_key'])
                count.push(data[i].count)
            }
            return [arr,count]
        })
        return new ResSuccess(result);
    }
}
