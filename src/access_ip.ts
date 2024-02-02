import { Request, Response } from 'express';
import * as requestIp from 'request-ip';
import IP2Region from 'ip2region';
import { INestApplication, Logger } from '@nestjs/common';
import { dbProviders } from '@/config/db.providers';
import dayjs from 'dayjs';
import { QueryTypes } from 'sequelize';


export default function(app: INestApplication) {
  app.use('*', async (req: Request, res: Response, next: Function) => {
    let ip = requestIp.getClientIp(req);
    let region = new IP2Region().search(requestIp.getClientIp(req));
    Logger.log('访问IP:', { ip, ...region });
    console.log('访问IP:', JSON.stringify({ ip, ...region }));
    const insert_sql = `INSERT INTO access_log (ip,country,province,city,isp,access_time) VALUES ("${ip}","${region.country}","${region.province}","${region.city}","${region.isp}","${dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')}")`;
   try {
     const seq = await dbProviders[0].useFactory();
     const select_data = await seq.query(`SELECT ip FROM access_log WHERE ip = "${ip}"`, { raw: true,type: QueryTypes.SELECT });
     if(select_data.length == 0){
       await seq.query(insert_sql)
     }
     next();
   }catch (e) {
     Logger.debug("访问记录异常：",e)
     next();
   }
  });
}