import {Inject, Injectable} from "@nestjs/common";
import {ResSuccess} from "../../utils/http.response";
import {RequestDto} from "./dto/request.dto";
import {AuthenService} from "../../authen/authen.service";

@Injectable()
export class SignService {
    constructor(private authenService: AuthenService, @Inject("SIGN_PROVIDERS") private readonly signProviders: any) {
    }

    async loginReg(requestDto: RequestDto) {
        let token = await this.authenService.validateSign(requestDto.uname, requestDto.password);
        throw new ResSuccess(token);
    }

    async getUser(req: Request) {
        console.log(req["uid"])
        let id = req["uid"]
        const result = await this.signProviders.findOne({where: {id},raw:true})
        delete  result.password
        delete  result.id
        throw new ResSuccess(result);
    }
}
