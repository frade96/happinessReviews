import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged = new BehaviorSubject<boolean>(false);
  $isLogged = this.isLogged.asObservable();

  constructor(private http: HttpClient) { }

  public updateLogged(value: boolean) {
    this.isLogged.next(value);
  }

  login(username: string) {
    return this.http.post<User>(environment.url + 'login', {email: username});
  }

  getUsers() {
    return this.http.get<Array<User>>(environment.url + 'getUsers');
  }

}
