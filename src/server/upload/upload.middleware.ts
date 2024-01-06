import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UploadMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(req);
    next();
  }
}
