import { Component, OnInit } from '@angular/core';
import { config } from 'rxjs';
import { Configuracion } from '../../config';
import { GeneralService } from '../../services/general-sevice'
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GeneralService]
})

export class HomeComponent implements OnInit {


  public about: string;
  public aromaterapia: string;
  public sexualidad: string;
  public url: string
  public config: any;

  constructor(){
    this.about = Configuracion.about;
    this.sexualidad = Configuracion.sexualidad;
    this.aromaterapia = Configuracion.aromaterapia;
    this.url = Global.url;
    this.config = Configuracion;
  }


  ngOnInit(): void {
  }
}
