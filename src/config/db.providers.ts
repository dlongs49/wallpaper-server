import { Sequelize } from 'sequelize-typescript';
import * as process from "process";
import { SignModel } from "@/server/sign/model/sign.model";
import {WallpaperTypeModel} from "@/server/wallpaper/model/wallpaper_type.model";
import {WallpaperModel} from "@/server/wallpaper/model/wallpaper.model";
import {CollectModel} from "@/server/sign/model/collect.model";
import {Logger} from "@nestjs/common";
import {UploadLogModel} from "@/server/upload/model/uploadLog.model";
export const dbProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER_NAME,
        password: process.env.DATABASE_USER_PWD,
        database: process.env.DATABASE_NAME,
        timezone: '+08:00',
        logging:(sql)=>{
          Logger.debug(sql)
        }
      });
      sequelize.addModels([SignModel,WallpaperTypeModel,WallpaperModel,UploadLogModel,CollectModel]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
