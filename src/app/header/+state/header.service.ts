import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserLogin } from './header.model';

const loginHttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    username: '',
    password: '',
  }),
};
const refreshHeader = {
  headers: new HttpHeaders({
    token: '',
    refreshToken: '',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private userLoginUrl: string;
  private userRefreshUrl: string;

  constructor(private http: HttpClient) {
    this.userLoginUrl = 'https://localhost:5001/tool/users/login';
    this.userRefreshUrl = 'https://localhost:5001/tool/users/refresh';
  }

  loginUser(userLogin: UserLogin): Observable<any> {
    loginHttpOptions.headers = loginHttpOptions.headers.set(
      'Username',
      userLogin.username
    );
    loginHttpOptions.headers = loginHttpOptions.headers.set(
      'Password',
      userLogin.password
    );
    return this.http.post<any>(this.userLoginUrl, '', loginHttpOptions);
  }
  refreshToken(user: User): Observable<any> {
    refreshHeader.headers = refreshHeader.headers.set('Token', user.token);
    refreshHeader.headers = refreshHeader.headers.set(
      'RefreshToken',
      user.refreshToken
    );

    return this.http.post<any>(this.userRefreshUrl, '', refreshHeader);
  }
}
