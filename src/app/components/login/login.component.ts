import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public user: any;
  public wrongData: string;


  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.user = {};
    this.wrongData = 'correct';
  }

  ngOnInit(): void {
  }

  signUp() {
    this.loginService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/huellaPanel']);
        },
        err => {
         console.log(err);
         this.wrongData = "incorrect"
        }
      );
  }

}
