import { Injectable } from '@nestjs/common';
import { ResSuccess } from "../../utils/http.response";
import { RequestDto } from "./dto/request.dto";
import { AuthenService } from "../../authen/authen.service";

@Injectable()
export class SignService {
  constructor(private authenService:AuthenService) {
  }
  async loginReg(requestDto:RequestDto){
    let token = this.authenService.getToken(requestDto);
    throw new ResSuccess(token)
  }
}
