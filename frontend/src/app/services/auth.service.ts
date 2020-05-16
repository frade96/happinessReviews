import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../components/entity/user';
import { AuthToken } from '../components/entity/auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  private isLogged = new BehaviorSubject<boolean>(false);
  $isLogged = this.isLogged.asObservable();

  constructor(private http: HttpClient) { 
    this.updateLogged();
  }

  ngOnInit() {
  }

  public updateLogged() {
    if (sessionStorage.getItem('token')) {
      this.isLogged.next(true);
      return;
    }

    this.isLogged.next(false);
  }

  userIsLogged() {
    if (sessionStorage.getItem('token'))
      return true;
    return false;
  }

  login(username: string) {
    return this.http.post<AuthToken>(environment.url + 'login', {email: username});
  }
  
  logout() {
    if (this.userIsLogged) {
      sessionStorage.removeItem('token');
      this.updateLogged();
    }
  }

  getUsers() {
    return this.http.get<Array<User>>(environment.url + 'getUsers');
  }

}
