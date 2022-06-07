import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { UserService } from '../shared/user/user.service';
import { ApiService } from '../service/api.service';

import { User } from '../models/users/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

declare var require: any;
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  // routeLink to listUserComponent
  public userUrl!: string;
  // Message
  public message!: string;
  // Status of event at listUserComponent
  public checkLogin = false;
  public listUser!: User[];
  public userLogined = {
    username: '',
    password: '',
    diaBan: {}
  };
  public userLogin: User = {
    username: '',
    password: '',
    diaBan: {},
  }

  constructor(
    private router: Router,
    private api: ApiService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.userService.userLoginedCurrent.subscribe(user => this.userLogined = user);
    this.userService.checkLoginCurrent.subscribe(check => this.checkLogin = check)
    this.userService.listUserCurrent.subscribe(listUser => this.listUser = listUser);

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.maxLength(12), Validators.required]],
      password: ['', [Validators.maxLength(10), Validators.required]]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Username and password input
  private usernameLogin!: string;
  private passwordLogin!: string;

  public onSubmit(): void {
    this.usernameLogin = this.loginForm.value.username;
    this.passwordLogin = this.loginForm.value.password;

    // Find index location of login user
    const index = this.listUser.findIndex(user => user.username === this.usernameLogin);
    // If username of login user exist in users list
    if (index >= 0) {
      // Check password of log in user corresponding to username
      if (this.passwordLogin === this.listUser[index].password) {
        this.checkLogin = true;
        this.userService.changeStatus(this.checkLogin);
        this.userService.changeLoginedUser(this.listUser[index]);
        // Go to listUser screen
        this.userUrl = "/home";
        this.router.navigateByUrl(this.userUrl);
      } else {
        // Messgae error
        this.message = "Username or password is incorrect";
      }
    } else {
      // Message error
      this.message = "Username or password is incorrect";
    }

    this.login(this.loginForm.value.username, this.loginForm.value.password);
  }

  private login(username: string, password: string) {
    this.auth.login({username: username, password: password}).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: () => {
      },
    });
  }

}
