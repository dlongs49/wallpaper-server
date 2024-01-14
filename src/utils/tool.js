"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeqScreen = void 0;
/*
* Author:dinglong
* DateTime:2024/1/7 下午 1:10
*/
var sequelize_1 = require("sequelize");
// sql 查询列表筛选条件
var SeqScreen = function (offset, limit, kw, filed, sort, orders) {
    var _a;
    if (offset === void 0) { offset = 1; }
    if (limit === void 0) { limit = 1; }
    if (kw === void 0) { kw = ''; }
    if (filed === void 0) { filed = ''; }
    if (sort === void 0) { sort = 'desc'; }
    if (orders === void 0) { orders = []; }
    var where = {};
    if (kw) {
        where[filed] = (_a = {},
            _a[sequelize_1.Op.like] = "%".concat(kw, "%") // 关键字查询
        ,
            _a);
    }
    // 排序 DESC 升序 ASC 降序 通过传入的 sort
    var order = [
        ['create_time', sort == 'asc' ? 'asc' : 'desc']
    ];
    var of = (offset - 1) * limit;
    return {
        where: where,
        order: order,
        offset: of === 0 ? 0 : of,
        limit: limit,
    };
};
exports.SeqScreen = SeqScreen;
