import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../../../base/base.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseComponent {

  baseUrl =  this.getBaseUrl();

  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  
  login(Username: string, Password: string): Observable<any> {
    return this.http.post(this.baseUrl + '/users/authenticate', {
      Username,
      Password
    }, httpOptions);
  }

  register(registerUserDto : any): Observable<any> {

    return this.http.post(this.baseUrl + '/users/register', registerUserDto , httpOptions);
  
  }

}
