import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor.interface';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore,
              private dbs: AngularFireStorage) {
  }

  public getDoctors(){
    return this.db.collection('doctors').valueChanges();
  }

  public postDoctor(doctor:Doctor){
    return this.db.collection('doctors').add(doctor);
  }

  public getPremiumDoctors(){
    return this.db.collection('doctors').valueChanges();
  }

  public getFreemiumDoctors(){
    return this.db.collection('doctors').valueChanges();
  }

  public getDoctorByEmail(email:string){
    return this.db.collection('doctors', ref => ref.where('email', '==', email).limit(1)).valueChanges();

  }

  public getDoctorsBySpeciality(specility:string){

  }

  public getPremiumDoctorsBySpeciality(specility:string){

  }

  public geFreemiumDoctorsBySpeciality(specility:string){

  }

  public uploadPhoto(photo: File, user:string){
    const ref:AngularFireStorageReference = this.dbs.ref(user);
    return ref.put(photo);
  }

}
