import { Module } from '@nestjs/common';
import { SignService } from './sign.service';

@Module({
  providers: [SignService]
})
export class SignModule {}
