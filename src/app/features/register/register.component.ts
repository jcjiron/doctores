import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { FirebaseService } from '../../core/firebase.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Observable } from 'rxjs';
import { Doctor } from '../../model/doctor.interface';
import { HttpLocalService } from '../../core/http-local.service';

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

  constructor(
    private fs: FirebaseService,
    private lss: LocalStorageService,
  private httpLocal: HttpLocalService) {

    this.doctor = { address: '', certificate: '', email: '', name: '', phone: '', photo: '', speciality: '', token: ''}



    this.doctorForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('^\d{10}$')]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'specialty': new FormControl(null, [Validators.required]),
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
          this.doctorForm.controls['email'].disable();

          this.doctorForm.controls['name'].setValue(user.displayName);
          Materialize.updateTextFields();
    });

    this.httpLocal.get('specialties.json')
    .subscribe((data:any)=>{
      this.specialties = data.specialties;
    });

  }

  sendForm(){
    console.log(this.doctorForm.value);
  }

  change(event){
    // console.log(event.target.value)
    this.doctorForm.controls['specialty'].setValue(event.target.value);
  }

}
