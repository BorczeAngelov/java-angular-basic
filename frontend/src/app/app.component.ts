import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient]
})
export class AppComponent implements OnInit {
  title = 'frontend';
  message = '';
  pingResponeMessage = '';
  hostNameUrl: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.hostNameUrl = "//" + window.location.hostname;

    this.http.get(this.hostNameUrl + '/message').pipe(
      first(),
      tap(result => console.log('Message received from the server: ', result)),
      map(result => this.message = (result as any).message)
    ).subscribe();
  }

  pingServer(): void {

    this.http.get(this.hostNameUrl + '/api/pingServer').pipe(
      first(),
      tap(result => console.log('pingMessage received from the server: ', result)),
      map(result => this.pingResponeMessage = (result as any).message)
    ).subscribe();

  }
}
