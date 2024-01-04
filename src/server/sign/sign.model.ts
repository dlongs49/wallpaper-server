import { Column, Table, Model } from 'sequelize-typescript';
@Table({
    tableName: 'user',
    timestamps: false,
})
export class Sign extends Model<Sign> {
    @Column({ primaryKey: true })
    id: string;
    @Column
    uname: string;
    @Column
    password: string;
    @Column
    avatar: string;
    @Column
    reg_time: Date;
    @Column
    sex: string;
    @Column
    sex_tit: string;
    @Column
    nation: string;
}
