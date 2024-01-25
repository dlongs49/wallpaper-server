/*
* Author:dinglong
* DateTime:2024/1/7 上午 12:19
*/
import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";
import { WallpaperModel } from "@/server/wallpaper/model/wallpaper.model";
@Table({
  tableName: "wallpaper_type",
  timestamps: false
})
export class WallpaperTypeModel extends Model<WallpaperTypeModel> {
  @Column({ primaryKey: true, type: DataType.STRING })
  id: string;
  @Column({ type: DataType.STRING })
  title: string;
  @Column({ type: DataType.STRING })
  cover_url: string;
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  cover_type: number;
  @Column({ type: DataType.DATE })
  create_time: Date;
  @HasMany(() => WallpaperModel)
  list: WallpaperModel[];
}
