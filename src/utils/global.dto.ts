/*
* Author:dinglong
* DateTime:2024/1/7 上午 12:10
*/
import {ApiProperty} from "@nestjs/swagger";
// 列表分页 dto
export class PageReqDto{
    @ApiProperty({
        description: '页码',
    })
    offset: number;
    @ApiProperty({
        description: '每页条数',
    })
    limit: number;
}
export class FilterKwDto {
    @ApiProperty({
        description: '关键字',
    })
    keyword: string;
}
// 列表筛选 dto
export class FilterReqDto extends FilterKwDto{
    @ApiProperty({
        description: '根据时间排序 asc 正序 desc 倒序',
    })
    sort_type: string;
}
export class FilterAppDto extends FilterKwDto{
    @ApiProperty({
        description: '分类id',
    })
    type_id: string;
}
