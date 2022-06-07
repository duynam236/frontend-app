import { listUser } from './../../models/listUsers/listUser.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { User } from 'src/app/models/users/user';
import { loginedUser } from 'src/app/models/listUser/loginedUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listUserSource = new BehaviorSubject(listUser);
  public listUserCurrent = this.listUserSource.asObservable();

  public changeListUser(listUser: User[]) {
    this.listUserSource.next(listUser);
  }
  
  private userLoginedSource = new BehaviorSubject(loginedUser);
  public userLoginedCurrent = this.userLoginedSource.asObservable();

  public changeLoginedUser(userLogined: User) {
    this.userLoginedSource.next(userLogined);
  }

  private checkLoginSource = new BehaviorSubject(false);
  public checkLoginCurrent = this.checkLoginSource.asObservable();

  public changeStatus(check: boolean) {
    this.checkLoginSource.next(check);
  }

  constructor() { }

}
