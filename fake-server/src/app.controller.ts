import {Controller, Delete, Get, Put} from '@nestjs/common';

const WELCOME_MESSAGE = 'Fake API Working';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return WELCOME_MESSAGE;
  }

  @Get('fake')
  fake(): string {
    return 'FAKE';
  }

  @Delete('fake')
  fake2(): string {
    return 'FAKE';
  }
}
