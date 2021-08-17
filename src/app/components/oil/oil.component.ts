import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general-sevice';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css'],
  providers: [GeneralService]
})
export class OilComponent implements OnInit {
  public url: string
  public id: string
  public oil: any

  constructor(
    private _generalService: GeneralService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url
  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params) =>{
      this.id = params.id
    });
    this.getOil(this.id);
  }

  public getOil(id){
    this._generalService.getProduct(id, 'oil').subscribe(
      response => {
        console.log(response)
        this.oil = response.project
      },
      err => {
        console.log(<any>err)
      }
    );
  }

}
