import {Column, Table, Model, DataType} from 'sequelize-typescript';
@Table({
    tableName: 'user',
    timestamps: false,
})
export class SignModel extends Model<SignModel> {
    @Column({ primaryKey: true,type:DataType.STRING })
    id: string;
    @Column({type:DataType.STRING })
    uname: string;
    @Column({type:DataType.STRING })
    password: string;
    @Column({type:DataType.STRING })
    avatar: string;
    @Column({type:DataType.DATE })
    reg_time: Date;
    @Column({type:DataType.INTEGER,defaultValue: 0 })
    sex: string;
    @Column({type:DataType.STRING })
    sex_tit: string;
    @Column({type:DataType.STRING })
    nation: string;
}
