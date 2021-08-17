import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general-sevice'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GeneralService]
})
export class SearchComponent implements OnInit {

  constructor(
    private _generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.getOils();
  }


  filterPost = '';

  public posts: any

  public getOils(){
    this._generalService.getAllProducts('oil/products').subscribe(
      response => {
        console.log(response)
        this.posts = response.messages
        console.log(this.posts)
      },
      err => {
        console.log(<any>err)
      }
    );
  }

}
