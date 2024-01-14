"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFile = exports.HandleFileFilter = exports.HandleFilename = exports.HandleDestination = void 0;
var dayjs_1 = require("dayjs");
var fs = require("fs");
var path_1 = require("path");
var uuid_1 = require("uuid");
var http_response_1 = require("../../utils/http.response");
var process_1 = require("process");
var common_1 = require("@nestjs/common");
var file_type = ["image/png", "image/jpeg", "image/gif"];
// 配置文件路径
var HandleDestination = function (req, file, cb) {
    var date = (0, dayjs_1.default)(new Date()).format("YYYY-MM-DD");
    common_1.Logger.debug(process_1.default.env);
    // 检查是否存在该目录
    var isdir = fs.existsSync((0, path_1.join)(__dirname, "../../../www/public/".concat(file.fieldname, "/").concat(date)));
    var dir_path = (0, path_1.join)(__dirname, "../../../www/public/".concat(file.fieldname, "/").concat(date));
    if (!isdir) {
        // 创建目录
        fs.mkdirSync(dir_path);
    }
    return cb(null, dir_path);
};
exports.HandleDestination = HandleDestination;
// 配置文件名称
var HandleFilename = function (req, file, cb) {
    var file_origin = file.originalname.split('.');
    var file_name = (0, uuid_1.v4)() + '.' + file_origin[1];
    cb(null, file_name);
};
exports.HandleFilename = HandleFilename;
// 校验文件
var HandleFileFilter = function (req, file, cb) {
    if (!file_type.includes(file.mimetype)) {
        return cb(new http_response_1.ResFail("上传图片格式有误"), false);
    }
    cb(null, true);
};
exports.HandleFileFilter = HandleFileFilter;
// 返回路径
var JsonFile = function (files) {
    var files_path = files.path.replace(/\\/g, "/");
    var i = files_path.lastIndexOf(files.fieldname);
    var slice_path = files_path.slice(i, files_path.length);
    console.log(files_path, i, files.fieldname, slice_path);
    var url = "/upload/".concat(slice_path);
    return { url: url, name: files.originalname };
};
exports.JsonFile = JsonFile;
