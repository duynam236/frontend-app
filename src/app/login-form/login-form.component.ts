import { Component, OnInit } from '@angular/core';
import { User } from '../models/users/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  // routeLink to listUserComponent
  public userUrl!: string;
  // Message
  public message!: string;
  // Status of event at listUserComponent
  public statusUrl!: string;
  public users!: User[];
  public userLogin: User = {
    id: '',
    fullname: '',
    username: '',
    password: '',
    checkDelete: false,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
