import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../model/doctor.interface';
import { FirebaseService } from '../../core/firebase.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private doctor:Doctor;

  constructor(private fs: FirebaseService,
  private lss: LocalStorageService) { }

  ngOnInit() {

    const user = this.lss.getItem('user') ? JSON.parse(this.lss.getItem('user')) : null;

    this.fs.getDoctorByEmail(user.email)
    .subscribe((data:any[])=>{
      this.doctor = data.length ? data[0] : null;
      console.log(this.doctor);
    });


  }

}
