/*
* Author:dinglong
* DateTime:2024/1/7 下午 3:52
*/
import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({
    tableName: 'user_collcet',
    timestamps: false,
})
export class CollectModel extends Model<CollectModel> {
    @Column({ primaryKey: true,type:DataType.STRING })
    id: string;
    @Column({type:DataType.STRING })
    user_id: string;
    @Column({type:DataType.STRING })
    wallpaper_title: string;
    @Column({type:DataType.STRING })
    wallpaper_id: string;
    @Column({type:DataType.STRING })
    wallpaper_url: string;
    @Column({type:DataType.INTEGER,defaultValue: 0 })
    wallpaper_type: string;
    @Column({type:DataType.DATE })
    create_time: Date;
}
