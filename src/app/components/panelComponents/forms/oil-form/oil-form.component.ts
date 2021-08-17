import { Component, OnInit } from '@angular/core';
import { Global } from '../../../../services/global';
import { LoginService } from '../../../../services/login-service';
import { UploadService } from '../../../../services/uploads-service';
import { Oil } from '../../../../models/oil';

@Component({
  selector: 'app-oil-form',
  templateUrl: './oil-form.component.html',
  styleUrls: ['./oil-form.component.css'],
  providers: [LoginService, UploadService]
})
export class OilFormComponent implements OnInit {

  public status: string;
  public oil: Oil;
  public filesToUpload: Array<File>;
  public saveProject: any;
  public title: string;
  public uses: any;

  constructor(
    private loginService: LoginService,
    private uploadService: UploadService
  ) {
    this.oil = new Oil('', '', '', '', [], '');
    this.title = 'Crear aceite';
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.oil);
    this.uses = this.uses.split('·');
    console.log(this.uses);
    this.oil.description = this.uses;
    this.loginService.saveOil(this.oil).subscribe(
      response => {
        if (response.message){
          this.status = 'success';
          console.log(response);

          //subir foto
          this.uploadService.makeFileRequest(Global.url + 'oil/uploadImage/' + response.message._id, [], this.filesToUpload, 'image', 'oil')
          .then((result: any) => {
            this.status = 'success';
            form.reset();
          });
        }else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }

}
