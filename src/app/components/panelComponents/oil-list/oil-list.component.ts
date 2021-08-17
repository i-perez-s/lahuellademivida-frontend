import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login-service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'oil',
  templateUrl: './oil-list.component.html',
  styleUrls: ['./oil-list.component.css'],
  providers: [LoginService]
})
export class OilListComponent implements OnInit {
  public url: string;
  public oils: any;


  constructor(
    private loginService: LoginService,
  ) {
    this.url = Global.url;
    this.oils = [];
  }

  ngOnInit(): void {
    this.getProducts('oil');
  }

  public getProducts(type){
    this.loginService.getProducts(type).subscribe(
      response => {
        this.oils = response;
        this.oils = this.oils.messages;
      },
      err => {
        console.log(err);
      }
    );
  }

  public delete(id){
      this.loginService.delete(id, 'oil/').subscribe(
        response => {
        },
        err => {
          console.log(err);
        }
      );
    }

}
