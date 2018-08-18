import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
rootUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient ) { }

getdata() {
return this.http.get(this.rootUrl);
}
}
