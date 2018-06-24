import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {AnalyticsComponent} from './analytics/analytics.component';


import {AuthGuard} from '../shared/guards/auth.guard';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]  },
  { path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuard]  },
  { path: 'details/:id', component: DetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const SHARED_ROUTES = RouterModule.forRoot(APP_ROUTES);
