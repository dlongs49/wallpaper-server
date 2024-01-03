import { Sequelize } from 'sequelize-typescript';
import * as process from "process";
import { App } from "../server/app/app.model";

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
      });
      sequelize.addModels([App]);
      await sequelize.sync();
      return sequelize;
    },
  },
];