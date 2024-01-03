import { Column, Table, Model } from 'sequelize-typescript';
@Table({
  tableName: 'user',
  timestamps: false, // 默认true。true时会带createdAt、updatedAt字段查表
})
export class App extends Model<App> {
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
}
