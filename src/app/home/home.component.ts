import { UserService } from './../shared/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';

import { User } from '../models/users/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users!: User[];
  private checkLogin!: boolean;

  loginUser: any = {
    username: 'chuyenvien01',
    password: 'chuyenvien01',
  };

  constructor(
    private route: Router,
    private auth: AuthService,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.login();
    this.userService.checkLoginCurrent.subscribe(check => this.checkLogin = check);
    console.log(this.checkLogin)
  }

  private login() {
    this.auth.login(this.loginUser).subscribe({
      next: () => {
        this.route.navigate(['']);
      },
      error: () => {
      },
    });
  }

}
