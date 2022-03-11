import {
  NestInterceptor,
  Injectable,
  ExecutionContext,
  CallHandler, BadGatewayException,
} from '@nestjs/common';
import { RequestService } from './request/request.service';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {Request, Response} from "express";

@Injectable()
export class HttpExceptionInterceptor implements NestInterceptor {
  constructor(private readonly requestService: RequestService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const now = Date.now();
    return next
      .handle()
      .pipe(
          catchError(err => throwError(() => new BadGatewayException()))
      );
  }
}
