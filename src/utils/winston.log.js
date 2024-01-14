"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* Author:dinglong
* DateTime:2024/1/12 下午 10:23
*/
require("winston-daily-rotate-file");
var winston_1 = require("winston");
exports.default = (function () {
    return (0, winston_1.createLogger)({
        // 日志选项
        transports: [
            // warn、error日志存储到/logs/application-日期.log文件中
            new winston_1.default.transports.DailyRotateFile({
                level: 'warn',
                dirname: 'logs',
                filename: 'warn-%DATE%.log',
                datePattern: 'YYYY-MM-DD-HH',
                maxSize: '20m',
                maxFiles: '14d',
                format: winston_1.default.format.combine(winston_1.default.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss',
                }), 
                // 以json输出
                // winston.format.json(),
                // 以字符输出
                winston_1.default.format.simple()),
            }),
            // info日志存储到/logs/info-日期.log文件中
            new winston_1.default.transports.DailyRotateFile({
                level: 'info',
                dirname: 'logs',
                filename: 'info-%DATE%.log',
                datePattern: 'YYYY-MM-DD-HH',
                // 文件大小
                maxSize: '20m',
                // 最多14 天
                maxFiles: '14d',
                format: winston_1.default.format.combine(winston_1.default.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss',
                }), winston_1.default.format.simple()),
            }),
            new winston_1.default.transports.DailyRotateFile({
                level: 'debug',
                dirname: 'logs',
                filename: 'debug-%DATE%.log',
                datePattern: 'YYYY-MM-DD-HH',
                // 文件大小
                maxSize: '20m',
                // 最多14 天
                maxFiles: '14d',
                format: winston_1.default.format.combine(winston_1.default.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss',
                }), winston_1.default.format.simple()),
            }),
        ],
    });
});
