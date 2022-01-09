import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PingServerResponse } from './pingServerResponse';

@Injectable({
  providedIn: 'root'
})
export class PingServerService {

  serverUrl: string;
  pingResponeMessage$: Observable<PingServerResponse>;
  isProduction: boolean;

  constructor(private http: HttpClient) {
    this.isProduction = environment.production;

    if (this.isProduction) {
      this.serverUrl = "//" + window.location.hostname;
    }
    else {
      this.serverUrl = "http://localhost:8080";
    }
  }


  pingServer(): void {
    this.pingResponeMessage$ = this.http.get<PingServerResponse>(this.serverUrl + '/api/pingServer');
  }

}
