/*
* Author:dinglong
* DateTime:2024/1/7 下午 2:06
*/
import { Column, Model, BelongsTo, ForeignKey, Table, DataType } from "sequelize-typescript";
import { WallpaperTypeModel } from "@/server/wallpaper/model/wallpaper_type.model";

@Table({
  tableName: "wallpaper",
  timestamps: false
})
export class WallpaperModel extends Model<WallpaperModel> {
  @Column({ primaryKey: true, type: DataType.STRING })
  id: string;
  @ForeignKey(() => WallpaperTypeModel)
  @Column({ type: DataType.STRING })
  type_id: string;
  @Column({ type: DataType.STRING })
  type_name: string;
  @Column({ type: DataType.STRING })
  title: string;
  @Column({ type: DataType.STRING })
  url: string;
  @Column({ type: DataType.INTEGER })
  url_type: number;
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  is_like: number;
  @Column({ type: DataType.DATE })
  create_time: Date;
  // @BelongsTo(() => WallpaperTypeModel)
  // wallpaperTypeModel: WallpaperTypeModel;
}
