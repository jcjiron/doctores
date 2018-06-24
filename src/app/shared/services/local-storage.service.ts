import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storageSub= new Subject();

  constructor() { }


  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  setItem(key: string, data: string) {
    localStorage.setItem(key, data);
    this.storageSub.next(key);
  }

  getItem(key: string):string {
    return localStorage.getItem(key);
  }

  removeItem(key:string) {
    localStorage.removeItem(key);
    this.storageSub.next(key);
  }
}
