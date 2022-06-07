import { ApiService } from 'src/app/service/api.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ListUserComponent } from './../../../list-user/list-user.component';

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
  public listUser!: User[];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private api: ApiService
  ) { }

  ngOnInit( ): void {
    this.userService.userLoginedCurrent.subscribe(user => this.loginedUser = user);
    this.userService.checkLoginCurrent.subscribe(check => this.checkLogin = check);
    this.userService.listUserCurrent.subscribe(listUser => this.listUser = listUser);
    this.checkIsManager();
    this.api.getUser().subscribe({
      next: (res) => {
        this.listUser = res.data;
        console.log(this.listUser)
      },
      error: (err) => { },
    });
  }

  public openListUser() {
    this.dialog
    .open(ListUserComponent, {
      width: '80%',
    })
  }

  public getListUser() {
    this.userService.changeListUser(this.listUser);
    console.log(this.listUser)
  }

  private checkIsManager() {
    if (this.loginedUser.diaBan != null) {
        this.checkManager = false;
      } else {
        this.checkManager = true;
    }
  }

  public changeCheckLogin() {
    this.checkLogin = false;
    this.userService.changeStatus(this.checkLogin);
  }

}
