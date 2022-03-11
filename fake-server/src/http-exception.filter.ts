import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { RequestService } from './request/request.service';

const STATUS_OK = 200;

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly requestService: RequestService) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    this.requestService.addRequest(request);
    response.status(STATUS_OK).send();
  }
}
