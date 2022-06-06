import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { User } from 'src/app/models/users/user';
import { loginedUser } from 'src/app/models/listUser/loginedUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userLoginedSource = new BehaviorSubject(loginedUser);
  public userLoginedCurrent = this.userLoginedSource.asObservable();

  // Update listUser for all component
  public changeListUser(userLogined: User) {
    this.userLoginedSource.next(userLogined);
  }

  private checkLoginSource = new BehaviorSubject(false);
  public checkLoginCurrent = this.checkLoginSource.asObservable();

  // Update statusUrl for all component
  public changeStatus(check: boolean) {
    this.checkLoginSource.next(check);
  }

  constructor() { }

}
