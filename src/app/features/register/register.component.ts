import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { FirebaseService } from '../../core/firebase.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Observable } from 'rxjs';
import { Doctor } from '../../model/doctor.interface';
import { HttpLocalService } from '../../core/http-local.service';

import * as Pattern from '../../shared/utils/app.patterns';

declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private doctor:Doctor;
  private doctorForm: FormGroup;
  private specialties: any[] = [];
  private photo:string = '';
  private photoTemp:File;
  private photoUpload:File;

  constructor(
    private fs: FirebaseService,
    private lss: LocalStorageService,
    private httpLocal: HttpLocalService) {

      this.doctor = { address: '', certificate: '', email: '', name: '', phone: '', photo: '', speciality: '', token: ''}



      this.doctorForm = new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'phone': new FormControl(null, [Validators.required, Validators.pattern(Pattern.PHONE)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'specialty': new FormControl(null, [Validators.required]),
        'certificate': new FormControl(null, [Validators.required, Validators.pattern(Pattern.CERTIFICATE)]),
        'address': new FormControl(null, [Validators.required])

      }, {updateOn: 'blur'});
    }

    ngOnInit() {

      const user = this.lss.getItem('user') ? JSON.parse(this.lss.getItem('user')) : null;

      this.fs.getDoctorByEmail(user.email)
      .subscribe((data:any[])=>{
        this.doctor = data.length ? data[0] : null;

        // edit user information
        if (this.doctor) {

        // else register user
      }else{
      this.doctorForm.controls['email'].setValue(user.email);
      this.doctorForm.controls['email'].disable();
      this.doctorForm.controls['name'].setValue(user.displayName);
      // console.log(user)
      this.photo = user.photoURL;
      Materialize.updateTextFields();
    }
  });

  this.httpLocal.get('specialties.json')
  .subscribe((data:any)=>{
    this.specialties = data.specialties;
  });
}

loadPhoto(file:File){
  if (file) {
    if (file.type.indexOf('image') >= 0) {

      this.photoUpload = file;

      let reader = new FileReader();
      let urlPhotoTemp = reader.readAsDataURL( file );

      reader.onloadend = ()=> this.photoTemp = reader.result;
    }
  }
}

sendForm(){
  console.log(this.doctorForm);
}

changeSelect(event){
  this.doctorForm.controls['specialty'].setValue(event.target.value);
}

}
