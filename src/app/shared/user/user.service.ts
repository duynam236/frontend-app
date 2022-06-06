import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { User } from 'src/app/models/users/user';
import { userLogined } from 'src/app/models/listUser/userLogined.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userLoginedSource = new BehaviorSubject(userLogined);
  public userLoginedCurrent = this.userLoginedSource.asObservable();

  // Update listUser for all component
  public changeListUser(userLogined: User) {
    this.userLoginedSource.next(userLogined);
  }

  private statusLoginSource = new BehaviorSubject(false);
  public statusLoginCurrent = this.statusLoginSource.asObservable();

  // Update statusUrl for all component
  public changeUrl(check: boolean) {
    this.statusLoginSource.next(check);
  }

  constructor() { }

}
