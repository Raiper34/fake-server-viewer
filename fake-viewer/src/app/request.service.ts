import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {RequestData} from "./request-data";
import {HttpClient} from "@angular/common/http";

const REQUEST_URL = 'http://localhost:3001/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private readonly http: HttpClient) { }

  getRequests$(): Observable<RequestData[]> {
    return this.http.get<RequestData[]>(REQUEST_URL);
  }
}
