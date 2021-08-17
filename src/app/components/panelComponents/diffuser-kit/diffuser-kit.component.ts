import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login-service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'diffuser',
  templateUrl: './diffuser-kit.component.html',
  styleUrls: ['./diffuser-kit.component.css'],
  providers: [LoginService]
})
export class DiffuserKitComponent implements OnInit {

  public url: string;
  public diffusers: any;

  constructor(
    private loginService: LoginService,
  ) {
    this.url = Global.url;
    this.diffusers = [];
  }

  ngOnInit(): void {
    this.getProducts('diffuser');
  }

  public getProducts(type){
    this.loginService.getProducts(type).subscribe(
      response => {
        this.diffusers = response;
        this.diffusers = this.diffusers.messages;
      },
      err => {
        console.log(err);
      }
    );
  }

  public delete(id){
      this.loginService.delete(id, 'diffuser/').subscribe(
        response => {
        },
        err => {
          console.log(err);
        }
      );
    }

}


