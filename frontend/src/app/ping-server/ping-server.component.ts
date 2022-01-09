import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { first, map, tap } from 'rxjs/operators';
import { PingServerService } from './ping-server.service';

@Component({
  selector: 'app-ping-server',
  templateUrl: './ping-server.component.html',
  styleUrls: ['./ping-server.component.css']
})
export class PingServerComponent implements OnInit {

  connectMessage: '';

  constructor(private http: HttpClient, public pingServerService: PingServerService) { }

  ngOnInit(): void {

    this.http.get(this.pingServerService.serverUrl + '/message').pipe(
      first(),
      tap(result => console.log('Message received from the server: ', result)),
      map(result => this.connectMessage = (result as any).message)
    ).subscribe();
  }

  pingServer(): void {
    this.pingServerService.pingServer();
  }
}