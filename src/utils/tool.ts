/*
* Author:dinglong
* DateTime:2024/1/7 下午 1:10
*/
import {Op} from "sequelize";
import IP2Region from 'ip2region'
import * as requestIp from "request-ip";
import {Request} from "express";
// sql 查询列表筛选条件
export const SeqScreen = (offset=1,limit = 1,kw = '', filed='', sort = 'desc',orders = []) => {
    let where = {}
    if (kw) {
        where[filed] = {
            [Op.like]: `%${kw}%` // 关键字查询
        }
    }
    // 排序 DESC 升序 ASC 降序 通过传入的 sort
    let order = [
        ['create_time', sort == 'asc' ? 'asc' : 'desc']
    ]
    let of = (offset - 1) * limit
    return {
        where,
        order,
        offset: of === 0 ? 0 : of,
        limit: limit,
    }
}

// 根据 ip 获取定位信息
export const getNation = (req:Request)=>{
    let region = new IP2Region().search(requestIp.getClientIp(req))
    let nation = null
    if(region.province){
        nation = region.country + " · " + region.province
    }
    return nation
}
