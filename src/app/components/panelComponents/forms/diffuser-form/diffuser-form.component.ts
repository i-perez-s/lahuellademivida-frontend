import { Component, OnInit } from '@angular/core';
import { Global } from '../../../../services/global';
import { LoginService } from '../../../../services/login-service';
import { UploadService } from '../../../../services/uploads-service';
import { Diffuser } from '../../../../models/diffuser';

@Component({
  selector: 'app-diffuser-form',
  templateUrl: './diffuser-form.component.html',
  styleUrls: ['./diffuser-form.component.css'],
  providers: [LoginService, UploadService]
})
export class DiffuserFormComponent implements OnInit {
  public status: string;
  public diffuser: Diffuser;
  public filesToUpload: Array<File>;
  public saveProject: any;
  public title: string;

  constructor(
    private loginService: LoginService,
    private uploadService: UploadService
  ) {
    this.diffuser = new Diffuser('', '', '', '', '');
    this.title = 'Crear difusor';
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this.loginService.saveDiffuser(this.diffuser).subscribe(
      response => {
        if (response.message){
          this.status = 'success';
          console.log(response);

          //subir foto
          this.uploadService.makeFileRequest(Global.url + 'diffuser/uploadImage/' + response.message._id, [], this.filesToUpload, 'image', 'diffuser')
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
