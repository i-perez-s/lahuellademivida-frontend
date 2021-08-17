import { Component, OnInit } from '@angular/core';
import { Global } from '../../../../services/global';
import { LoginService } from '../../../../services/login-service';
import { UploadService } from '../../../../services/uploads-service';
import { Kit } from '../../../../models/kit';

@Component({
  selector: 'app-kit-form',
  templateUrl: './kit-form.component.html',
  styleUrls: ['./kit-form.component.css'],
  providers: [LoginService, UploadService]
})
export class KitFormComponent implements OnInit {

  public status: string;
  public kit: Kit;
  public filesToUpload: Array<File>;
  public saveProject: any;
  public title: string;

  constructor(
    private loginService: LoginService,
    private uploadService: UploadService
  ) {
    this.kit = new Kit('', '', '', '', '');
    this.title = 'Crear kit';
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.kit);
    this.loginService.saveKit(this.kit).subscribe(
      response => {
        if (response.message){
          this.status = 'success';
          console.log(response);

          //subir foto
          this.uploadService.makeFileRequest(Global.url + 'kit/uploadImage/' + response.message._id, [], this.filesToUpload, 'image', 'kit')
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
