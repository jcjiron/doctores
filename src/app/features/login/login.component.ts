import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs';
import { auth } from 'firebase/app';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public lsSubsription: Subscription;

  constructor(public afAuth: AngularFireAuth,
              public localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(()=>{
      if (this.afAuth.auth) {
        const user = this.afAuth.auth.currentUser;
        this.localStorageService.setItem('user', JSON.stringify(user));
      }
    });
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

logout() {
  this.afAuth.auth.signOut();
}

ngOnDestroy(){

}

}
