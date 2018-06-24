import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { SHARED_ROUTES } from './features.routes';

// modules
import {SharedModule} from '../shared/shared.module';
import { NguiMapModule} from '@ngui/map';

// components
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PaymentComponent } from './payment/payment.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SHARED_ROUTES,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB3W0r0yD8POEJYhMuaq-k-MxEs7t4rIwE'})


  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DetailComponent,
    SidebarComponent,
    FooterComponent,
    AnalyticsComponent,
    PaymentComponent
  ],
    exports: [
      HomeComponent,
      LoginComponent,
      NavbarComponent,
      RegisterComponent,
      AnalyticsComponent
    ]
  })
  export class FeaturesModule { }
