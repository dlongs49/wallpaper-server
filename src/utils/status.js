"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["OK"] = 200] = "OK";
    Status[Status["NOSIGN"] = 401] = "NOSIGN";
    Status[Status["FAIL"] = -1] = "FAIL";
    Status[Status["ERROR"] = -2] = "ERROR"; // 异常处理码
})(Status || (exports.Status = Status = {}));
