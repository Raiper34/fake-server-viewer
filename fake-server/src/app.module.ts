import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { RequestModule } from './request/request.module';
import {APP_FILTER, APP_INTERCEPTOR} from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HttpExceptionMiddleware } from './http-exception.middleware';
import {HttpExceptionInterceptor} from "./http-exception.interceptor";

@Module({
  imports: [
    RequestModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      serveRoot: '/client',
    }),
  ],
  controllers: [AppController],
  providers: [
    /*{
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpExceptionInterceptor,
    },*/
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpExceptionMiddleware)
      .exclude({ path: '/', method: RequestMethod.ALL }, { path: '/fake', method: RequestMethod.ALL }, { path: '/request', method: RequestMethod.ALL })
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
