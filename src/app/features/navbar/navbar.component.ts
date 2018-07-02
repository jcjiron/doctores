import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {MaterializeDirective, MaterializeAction } from "angular2-materialize";
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase/app';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../../core/firebase.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {


  private user:User;
  private lsSubsription:Subscription;

  public drop: boolean = true;
  dropdownActions = new EventEmitter<string|MaterializeAction>();


  constructor(public afAuth: AngularFireAuth,
    public localStorageService: LocalStorageService,
    public fs: FirebaseService,
    public router: Router) { }

    ngOnInit() {

      let subs = this.localStorageService.watchStorage()
      .subscribe((key=>{

        this.user = this.localStorageService.getItem(key) !== null
        ? JSON.parse(this.localStorageService.getItem(key))
        : null;

        if (this.user !== null) {
        this.getUserInfo(this.user );
      }

      }));
    }

    getUserInfo(user){
        this.fs.getDoctorByEmail(user.email)
          .subscribe((data: any[])=>{
            if (data.length === 0) {
              this.router.navigate(['/register']);
            }else{
              this.router.navigate(['/analytics']);
            }
          });

    }

    logout() {
      this.afAuth.auth.signOut();
      this.localStorageService.removeItem('user');
      this.router.navigate(['/home']);
    }

    ngOnDestroy(){
      this.lsSubsription.unsubscribe();
    }

  }
