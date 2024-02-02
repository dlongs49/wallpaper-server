import {
    Controller,
    Get,
    Query
} from "@nestjs/common";
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import { StatisService } from "./statis.service";
import {PageReqDto} from "@/utils/global.dto";
@ApiTags("访问统计")
@Controller('statis')
export class StatisController {
    constructor(private statisService:StatisService) {
    }
    @ApiOperation({ summary: '访问记录' })
    @Get("/record_list")
    getAccessRecord(@Query() pageReqDto: PageReqDto) {
        return this.statisService.getAccessRecord(pageReqDto)
    }
    @ApiOperation({ summary: '统计' })
    @Get("/access_statis")
    getAccessStatis(@Query("column_key") column_key: string) {
        return this.statisService.getAccessStatis(column_key)
    }
}
