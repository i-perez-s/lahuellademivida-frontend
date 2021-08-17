import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general-sevice';
import { Global } from 'src/app/services/global';
import { Message } from '../../models/message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [GeneralService]
})
export class ContactComponent implements OnInit {
  public url: string;
  public message: Message;
  public status: string;

  constructor(
    private _generalService: GeneralService,
  ) {
    this.url = Global.url;
    this.message = new Message('', '', '', '', '');
  }

  ngOnInit(): void {
  }

  public onSubmit(form){
    this._generalService.saveMessage(this.message).subscribe(
      response => {
        console.log(response);
        if (response.message){
          this.status = 'success';

          form.reset();
        }
        else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
