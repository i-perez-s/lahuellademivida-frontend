import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Configuracion } from './config';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'la huella de mi vida';

  public about: string;
  public aromaterapia: string;
  public sexualidad: string;

  public barsSearch: any;
  public coverCtnSearch: any;
  public inputSearch: any;
  public boxSearch: any;

  constructor(private router: Router, private tittle: Title){
    this.about = Configuracion.about
    this.sexualidad = Configuracion.sexualidad;
    this.aromaterapia = Configuracion.aromaterapia;


  }


  ngOnInit(): void  {
    this.tittle.setTitle('La huella de mi vida');

  }


  public mostrarMenu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
  }

}
