import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-temp-login',
  templateUrl: './temp-login.component.html',
  styleUrls: ['./temp-login.component.scss'],
})
export class TempLoginComponent implements OnInit {
  loginUser: any = {
    username: '',
    password: '',
  };

  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit(): void {}

  login() {
    this.auth.login(this.loginUser).subscribe({
      next: () => {
        alert('Login successfully');
        this.route.navigate(['coso']);
      },
      error: () => {
        alert('Login failed');
      },
    });
  }
}
