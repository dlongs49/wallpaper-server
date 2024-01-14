"use strict";
/*
* Author:dinglong
* DateTime:2024/1/5 下午 8:37
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtContent = void 0;
// jwt 密钥 过期时间常量
var JwtContent;
(function (JwtContent) {
    JwtContent["JWTCONTENT_SECRET"] = "wallpaper123s";
    JwtContent["JWTCONTENT_EXPIREIN"] = "3h";
})(JwtContent || (exports.JwtContent = JwtContent = {}));
