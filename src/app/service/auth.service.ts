import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http.post('http://localhost:4040/login', user, {
      withCredentials: true,
    });
  }
}
