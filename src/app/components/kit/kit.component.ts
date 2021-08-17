import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general-sevice';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.css'],
  providers: [GeneralService]
})
export class KitComponent implements OnInit {

  public url: string;
  public id: string;
  public kit: any;

  constructor(
    private _generalService: GeneralService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params) =>{
      this.id = params.id;
    });
    this.getKit(this.id);
  }

  public getKit(id){
    this._generalService.getProduct(id, 'kit').subscribe(
      response => {
        console.log(response)
        this.kit = response.project;
      },
      err => {
        console.log(<any> err)
      }
    );
  }

}
