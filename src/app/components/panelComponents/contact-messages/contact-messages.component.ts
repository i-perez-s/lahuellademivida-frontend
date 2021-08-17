import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login-service';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'contact',
  templateUrl: './contact-messages.component.html',
  styleUrls: ['./contact-messages.component.css'],
  providers: [LoginService]
})
export class ContactMessagesComponent implements OnInit {
  public url: string;
  public dudas: any;
  public pedidos: any;
  public otros: any;
  public typeMessage: string;



  constructor(
    private loginService: LoginService,
  ) {
    this.url = Global.url;
    this.typeMessage = 'dudas';
  }

  ngOnInit(): void {
    this.getMessages();
  }

  public getMessages(){
    this.loginService.getMessages('doubts').subscribe(
      response => {
        this.dudas = response;
        this.dudas = this.dudas.messages;
      },
      err => {
        console.log(err);
      }
    );
    this.loginService.getMessages('orders').subscribe(
      response => {
        this.pedidos = response;
        this.pedidos = this.pedidos.messages;
      },
      err => {
        console.log(err);
      }
    );
    this.loginService.getMessages('others').subscribe(
      response => {
        this.otros = response;
        this.otros = this.otros.messages;
      },
      err => {
        console.log(err);
      }
    );

  }

  public changeTypeMessage(newType: string){
    this.typeMessage = newType;
  }

  public deleteMessage(id){
    this.loginService.delete(id, 'contact/').subscribe(
      response => {
      },
      err => {
        console.log(err);
      }
    );

  }

}
