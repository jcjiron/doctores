import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate , ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router : Router,
              public route: ActivatedRoute) {}
  canActivate() {

    if(localStorage.getItem("user") === null){
      this.router.navigateByUrl('/home');
      // this.router.navigate([''], {relativeTo: this.route.parent});
    }
    return (!localStorage.getItem("user") === null) ? false : true;
  }
}
