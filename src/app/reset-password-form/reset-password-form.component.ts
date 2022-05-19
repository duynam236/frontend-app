import { Component, OnInit } from '@angular/core';
import { User } from '../models/users/user';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

  // routeLink to listUserComponent
  public userUrl!: string;  
  // Message
  public message!: string;
  public user: User = {
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
