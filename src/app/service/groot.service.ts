import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrootService {

  constructor(private http: HttpClient) { }
  url = "https://grooter.free.beeceptor.com";
  //url = "https://i-am-groot.free.beeceptor.com";
  users() {
    return this.http.get(`${this.url}/users`)
  }
}
