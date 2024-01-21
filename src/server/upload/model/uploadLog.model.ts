import {Column, Table, Model, DataType} from 'sequelize-typescript';
@Table({
    tableName: 'upload_log',
    timestamps: false,
})
export class UploadLogModel extends Model<UploadLogModel> {
    @Column({ primaryKey: true,type:DataType.STRING })
    id: string;
    @Column({type:DataType.STRING })
    file_name: string;
    @Column({type:DataType.STRING })
    file_path: string;
    @Column({type:DataType.DATE })
    create_time: Date;
}
