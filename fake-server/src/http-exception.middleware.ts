import { NestMiddleware, Injectable } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { RequestService } from './request/request.service';

@Injectable()
export class HttpExceptionMiddleware implements NestMiddleware {
  constructor(private readonly requestService: RequestService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.requestService.addRequest(req).then(() => res.redirect('/fake'));
  }
}
