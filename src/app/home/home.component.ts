import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';
import { UserService } from '../shared/user/user.service';

import { User } from '../models/users/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users!: User[];
  private checkLogin = false;

  loginUser: any = {
    username: 'chuyenvien01',
    password: 'chuyenvien01',
  };

  constructor(
    private route: Router,
    private auth: AuthService, 
    private api: ApiService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.login();
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
