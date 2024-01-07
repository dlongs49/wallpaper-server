/*
* Author:dinglong
* DateTime:2024/1/7 下午 2:06
*/
import {Column, Model, Table,DataType} from "sequelize-typescript";
@Table({
    tableName: 'wallpaper',
    timestamps: false,
})
export class WallpaperModel extends Model{
    @Column({ primaryKey: true,type:DataType.STRING })
    id:string
    @Column({type:DataType.STRING })
    type_id: string;
    @Column({type:DataType.STRING })
    title: string;
    @Column({type:DataType.STRING })
    url: string;
    @Column({type:DataType.INTEGER })
    url_type: number;
    @Column({type:DataType.INTEGER })
    is_like: number;
    @Column({type:DataType.DATE })
    create_time: Date;
}
