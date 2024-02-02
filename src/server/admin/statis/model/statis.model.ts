import {Column, Table, Model, DataType} from 'sequelize-typescript';
@Table({
    tableName: 'access_log',
    timestamps: false,
})
export class StatisModel extends Model<StatisModel> {
    @Column({ primaryKey: true,type:DataType.STRING })
    ip: string;
    @Column({type:DataType.STRING })
    country: string;
    @Column({type:DataType.STRING })
    province: string;
    @Column({type:DataType.STRING })
    city: string;
    @Column({type:DataType.DATE })
    isp: string;
    @Column({type:DataType.DATE })
    access_time: string;
}
