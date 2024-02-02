import { Module } from '@nestjs/common';
import { StatisModel } from "./model/statis.model";
import { StatisService } from './statis.service';
import { StatisController } from './statis.controller';

@Module({
  controllers:[StatisController],
  providers: [
    StatisService,
    { provide: 'STATIS_PROVIDERS', useValue: StatisModel}
  ]
})
export class StatisModule {}
