import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { UserLogin } from './header.model';

const loginHttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    username: '',
    password: '',
  }),
};
const authenticationHeader = {
  headers: new HttpHeaders({
    authorization: '',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private userLoginUrl: string;

  constructor(private http: HttpClient) {
    this.userLoginUrl = 'https://localhost:5001/tool/users/login';
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

    return this.http.post<any>(
      this.userLoginUrl,
      '',
      loginHttpOptions
    );
  }
}
