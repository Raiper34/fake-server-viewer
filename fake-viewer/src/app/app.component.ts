import {Component} from '@angular/core';
import {RequestService} from "./request.service";
import {Observable} from "rxjs";
import {RequestData} from "./request-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  requestDataList$: Observable<RequestData[]> = this.requestService.getRequests$();

  constructor(private readonly requestService: RequestService) { }

}
