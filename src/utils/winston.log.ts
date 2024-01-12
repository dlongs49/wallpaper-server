/*
* Author:dinglong
* DateTime:2024/1/12 下午 10:23
*/
import {utilities, WinstonModule} from 'nest-winston';
import 'winston-daily-rotate-file';
import winston, {createLogger} from "winston";

export default ()=> {
    return createLogger({
        // 日志选项
        transports: [
            new winston.transports.Console({
                level: 'info',
                // 字符串拼接
                format: winston.format.combine(
                    winston.format.timestamp(),
                    utilities.format.nestLike(),
                ),
            }),
            // warn、error日志存储到/logs/application-日期.log文件中
            new winston.transports.DailyRotateFile({
                level: 'warn',
                dirname: 'logs',
                filename: 'warn-%DATE%.log',
                datePattern: 'YYYY-MM-DD-HH',
                zippedArchive: true,
                maxSize: '20m',
                maxFiles: '14d',
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.simple(),
                ),
            }),
            // info日志存储到/logs/info-日期.log文件中
            new winston.transports.DailyRotateFile({
                level: 'info',
                dirname: 'logs',
                filename: 'info-%DATE%.log',
                datePattern: 'YYYY-MM-DD-HH',
                zippedArchive: true,
                // 文件大小
                maxSize: '20m',
                // 最多14 天
                maxFiles: '14d',
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.simple(),
                ),
            }),
        ],
    });
}
