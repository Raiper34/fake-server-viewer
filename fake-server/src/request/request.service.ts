import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { RequestData } from './request-data';
import * as getRawBody from 'raw-body';

@Injectable()
export class RequestService {
  private requests: RequestData[] = [];

  getRequests(): RequestData[] {
    return this.requests;
  }

  async addRequest(request: Request): Promise<void> {
    const raw = await getRawBody(request);
    const text = raw.toString().trim();
    this.requests = [
      ...this.requests,
      {
        body: text,//request.body,
        headers: request.headers as { [key: string]: string },
        method: request.method,
        url: request.url,
        accepts: request.accepts(),
        hostname: request.hostname,
        ip: request.ip,
        query: request.query as { [key: string]: string },
        protocol: request.protocol,
      },
    ];
    console.log(this.requests);
  }
}
