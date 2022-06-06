import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/users/user';

import { UserService } from './../../user/user.service';

@Component({
  selector: 'app-horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html',
  styleUrls: ['./horizontal-navbar.component.scss']
})
export class HorizontalNavbarComponent implements OnInit {

  public loginedUser!: User;
  public checkLogin!: boolean;
  public checkManager!: boolean;

  constructor(
    private userService: UserService,

  ) { }

  ngOnInit( ): void {
    this.userService.userLoginedCurrent.subscribe(user => this.loginedUser = user);
    this.userService.checkLoginCurrent.subscribe(check => this.checkLogin = check);
    this.checkIsManager();
  }

  private checkIsManager() {
    if (this.loginedUser.diaBan != null) {
        this.checkManager = false;
      } else {
        this.checkManager = true;
    }
  }

}
