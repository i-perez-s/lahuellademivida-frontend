import { Component, OnInit } from '@angular/core';
import { Configuracion } from '../../config';
import { GeneralService } from '../../services/general-sevice';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-diffusers',
  templateUrl: './diffusers.component.html',
  styleUrls: ['./diffusers.component.css'],
  providers: [GeneralService]
})
export class DiffusersComponent implements OnInit {

  public url: string;
  public diffusers: any;
  public config:any

  constructor(

  ) {
    this.url = Global.url;
    this.config = Configuracion
    this.diffusers = [];

  }
  ngOnInit(): void {
    this.getDiffusers('diffuser/products');
  }

  public getDiffusers(id){
    this._generalService.getAllProducts(id).subscribe(
      response => {
        this.diffusers = response.messages
      },
      err => {
        console.log(<any>err)
      }
    );
  }

}
