import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general-sevice';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-diffuser',
  templateUrl: './diffuser.component.html',
  styleUrls: ['./diffuser.component.css'],
  providers: [GeneralService]
})
export class DiffuserComponent implements OnInit {

  public url: string
  public id: string
  public diffuser: any


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
    this.getDiffuser(this.id);
  }

  public getDiffuser(id){
    this._generalService.getProduct(id, 'diffuser').subscribe(
      response => {
        console.log(response)
        this.diffuser = response.project
      },
      err => {
        console.log(<any>err)
      }
    );
  }


}
