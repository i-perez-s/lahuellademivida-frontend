import { Component, OnInit } from '@angular/core';
import { Configuracion } from '../../config';
import { GeneralService } from '../../services/general-sevice';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.css'],
  providers: [GeneralService]
})
export class KitsComponent implements OnInit {

  public url: string;
  public kits: any;
  public config:any

  constructor(
    private _generalService: GeneralService
  ) {
    this.url = Global.url;
    this.config = Configuracion
    this.kits = [];

  }

  ngOnInit(): void {
    this.getKits('kit/products');
  }

  public getKits(id){
    this._generalService.getAllProducts(id).subscribe(
      response => {
        this.kits = response.messages
      },
      err => {
        console.log(<any>err)
      }
    );
  }

}
