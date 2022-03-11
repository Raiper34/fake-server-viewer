import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';

@Module({
  imports: [RequestModule],
  providers: [RequestService],
  controllers: [RequestController],
  exports: [RequestService],
})
export class RequestModule {}
