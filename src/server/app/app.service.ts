import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async findOne(){
    return {
      username:"test",
      password:"123456"
    }
  }
}
