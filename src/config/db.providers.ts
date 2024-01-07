import { Sequelize } from 'sequelize-typescript';
import * as process from "process";
import { SignModel } from "../server/sign/model/sign.model";
import {WallpaperTypeModel} from "../server/wallpaper/model/wallpaper_type.model";
import {WallpaperModel} from "../server/wallpaper/model/wallpaper.model";

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
        timezone: '+08:00'
      });
      sequelize.addModels([SignModel,WallpaperTypeModel,WallpaperModel]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
