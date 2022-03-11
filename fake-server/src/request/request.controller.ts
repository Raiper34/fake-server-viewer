import { Controller, Get } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestData } from './request-data';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  getRequests(): RequestData[] {
    return this.requestService.getRequests();
  }
}
