import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login-service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'kit',
  templateUrl: './kit-list.component.html',
  styleUrls: ['./kit-list.component.css'],
  providers: [LoginService]
})
export class KitListComponent implements OnInit {

  public url: string;
  public kits: any;

  constructor(
    private loginService: LoginService,
  ) {
    this.url = Global.url;
    this.kits = [];
  }

  ngOnInit(): void {
    this.getProducts('kit');
  }

  public getProducts(type){
    this.loginService.getProducts(type).subscribe(
      response => {
        this.kits = response;
        this.kits = this.kits.messages;
      },
      err => {
        console.log(err);
      }
    );
  }

  public delete(id){
      this.loginService.delete(id, 'kit/').subscribe(
        response => {
        },
        err => {
          console.log(err);
        }
      );
    }

}
