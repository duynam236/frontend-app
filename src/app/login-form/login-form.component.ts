import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { UserService } from '../shared/user/user.service';
import { ApiService } from '../service/api.service';

import { User } from '../models/users/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  public statusUrl!: string;
  public listUser!: User[];
  public userLogined!: User;
  public userLogin: User = {
    username: '',
    password: '',
    diaBan: '',
  }

  constructor(
    private router: Router,
    private api: ApiService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userService.userLoginedCurrent.subscribe(user => this.userLogined = user);
    this.getAllUser();

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

  private getAllUser() {
    this.api.getUser().subscribe({
      next: (res) => {
        this.listUser = res.data;
      },
      error: (err) => { },
    });
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
        this.userService.changeListUser(this.userLogin);
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
  }

}
