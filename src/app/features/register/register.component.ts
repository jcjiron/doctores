import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { FirebaseService } from '../../core/firebase.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Observable } from 'rxjs';
import { Doctor } from '../../model/doctor.interface';
import { HttpLocalService } from '../../core/http-local.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private doctor:Doctor;
  private doctorForm: FormGroup;
  private specilities: any[] = [];

  constructor(
    private fs: FirebaseService,
    private lss: LocalStorageService,
  private httpLocal: HttpLocalService) {

    this.doctorForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'speciality': new FormControl(null, [Validators.required]),
      'certificate': new FormControl(null, [Validators.required]),
      'address': new FormControl(null, [Validators.required])

    }, {updateOn: 'blur'});
  }

  ngOnInit() {

    const user = this.lss.getItem('user') ? JSON.parse(this.lss.getItem('user')) : null;

    this.fs.getDoctorByEmail(user.email)
    .subscribe((data:any[])=>{
      this.doctor = data.length ? data[0] : null;

          this.doctorForm.controls['email'].setValue(user.email);
          this.doctorForm.controls['name'].setValue(user.displayName);
          Materialize.updateTextFields()
    });

    this.httpLocal.get('specilities.json')
    .subscribe((data:any)=>{
      this.specilities = data.specilities;
    });

  }

  sendForm(){
    console.log(this.doctorForm);
  }

}
