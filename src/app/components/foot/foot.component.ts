import { Component, OnInit } from '@angular/core';
import { Configuracion } from '../../config';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  public distribuidora: string;

  constructor() {
    this.distribuidora = Configuracion.distribiudora;
  }

  ngOnInit(): void {
  }

}
