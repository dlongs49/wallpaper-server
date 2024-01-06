/*
* Author:dinglong
* DateTime:2024/1/7 上午 12:19
*/
import {Column, Model, Table} from "sequelize-typescript";
@Table({
    tableName: 'wallpaper_type',
    timestamps: false,
})
export class WallpaperTypeModel extends Model{
    @Column({ primaryKey: true })
    id: string;
    @Column
    title: string;
    @Column
    cover_url: string;
    @Column
    cover_type: number;
    @Column
    create_time: Date;
}
