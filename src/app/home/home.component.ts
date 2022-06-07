import { UserService } from './../shared/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';

import { User } from '../models/users/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users!: User[];
  private checkLogin!: boolean;
  private userLogined!: User;
  private listUser!: User[];

  constructor(
    private route: Router,
    private auth: AuthService,
    private userService : UserService,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    if (this.checkLogin) {
      this.login();
    }
    this.userService.checkLoginCurrent.subscribe(check => this.checkLogin = check);
    this.userService.userLoginedCurrent.subscribe(user => this.userLogined = user);
    this.userService.listUserCurrent.subscribe(listUser => this.listUser = listUser);
    
  }

  private login() {
    const loginUser: any = {
      username: this.userLogined.username,
      password: this.userLogined.password,
    };
    this.auth.login(loginUser).subscribe({
      next: () => {
        this.route.navigate(['']);
      },
      error: () => {
      },
    });
  }

}
