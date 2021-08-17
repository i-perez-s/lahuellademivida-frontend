import { Component, OnInit } from '@angular/core';
import { Configuracion } from '../../config';
import { GeneralService } from '../../services/general-sevice';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-oils',
  templateUrl: './oils.component.html',
  styleUrls: ['./oils.component.css'],
  providers: [GeneralService]
})
export class OilsComponent implements OnInit {

  public url:string
  public oilText: string
  public simpleOil: any
  public sinergiaOil: any
  public typeOil: string

  constructor(
    private _generalService: GeneralService
  ) {
    this.url = Global.url;
    this.oilText = Configuracion.oilText;
    this.typeOil = 'simples';
  }

  ngOnInit(): void {
    this.oilSimple();
    this.oilSinergia();
  }

  public oilSimple(){
    this._generalService.getSimples().subscribe(
      response => {
        this.simpleOil = response.messages;
        console.log(this.simpleOil);
      },
      err => {
        console.log(<any>err);
      }
    );
  }
  public oilSinergia(){
    this._generalService.getSinergias().subscribe(
      response => {
        this.sinergiaOil = response.messages;
        console.log(this.sinergiaOil);
      },
      err => {
        console.log(<any>err);
      }
    );
  }



}
