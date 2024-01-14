"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResFail = exports.ResSuccess = void 0;
var common_1 = require("@nestjs/common");
var status_1 = require("./status");
// 成功响应
var ResSuccess = /** @class */ (function (_super) {
    __extends(ResSuccess, _super);
    function ResSuccess(data) {
        var msg = 'ok::' + new Date().getTime();
        return _super.call(this, { code: status_1.Status.OK, msg: msg, data: data }, common_1.HttpStatus.OK) || this;
    }
    return ResSuccess;
}(common_1.HttpException));
exports.ResSuccess = ResSuccess;
// 失败响应
var ResFail = /** @class */ (function (_super) {
    __extends(ResFail, _super);
    function ResFail(msg) {
        if (msg === void 0) { msg = "出现错误"; }
        return _super.call(this, { code: status_1.Status.FAIL, msg: msg }, common_1.HttpStatus.OK) || this;
    }
    return ResFail;
}(common_1.HttpException));
exports.ResFail = ResFail;
