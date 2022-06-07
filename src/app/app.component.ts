import { UserService } from './shared/user/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { User } from './models/users/user';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-app';

  // public users!: User[];
  private checkLogin!: boolean;
  private listUser!: User[];

  loginUser: any = {
    username: 'chuyenvien01',
    password: 'chuyenvien01',
  };

  constructor(
    private route: Router,
    private auth: AuthService,
    private userService : UserService,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.login();
    this.userService.checkLoginCurrent.subscribe(check => this.checkLogin = check);
    this.userService.listUserCurrent.subscribe(listUser => this.listUser = listUser);
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
