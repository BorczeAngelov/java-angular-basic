import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient]
})
export class AppComponent implements OnInit {
  title = 'frontend';
  message = '';
  pingMessage = '';
  hostNameUrl: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.hostNameUrl = "//" + window.location.hostname;

    this.http.get(this.hostNameUrl + '/message').pipe(
      first(),
      tap(result => console.log('Message received from the server: ', result)),
      map(result => this.message = (result as any).message)
    ).subscribe();

    this.http.get(this.hostNameUrl + '/api/pingServer').pipe(
      first(),
      tap(result => console.log('pingMessage received from the server: ', result)),
      map(result => this.pingMessage = (result as any).message)
    ).subscribe();    
  }

}
