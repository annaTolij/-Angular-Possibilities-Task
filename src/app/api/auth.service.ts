import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  register(value: any) {
    throw new Error("Method not implemented.");
  }

  private path = 'localhost:3000/api/';

  constructor(private http: HttpClient) { }

  public postLogIn(request): Observable<any> {
    return this.http.post<any>(`${this.path}login`, request);
  }

  public postRegiser(request): Observable<any> {
    return this.http.post<any>(`${this.path}registration`, request);
  }
}