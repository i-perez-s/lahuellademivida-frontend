import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers: [LoginService]
})
export class PanelComponent implements OnInit {
  public navbarLink: string;
  constructor(
    private loginService: LoginService
  ) {
    this.navbarLink = 'contact';
  }

  ngOnInit(): void {
  }

  public nav (place){
    this.navbarLink = place
  }

  public show(){
    console.log(this.navbarLink);
  }
  public logout(){
    this.loginService.logout();
  }

}
