import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ThemeModule } from './theme/theme.module';
import {CoreModule} from './core/core.module';
import {FeaturesModule} from './features/features.module';

// routes
import { SHARED_ROUTES } from './features/features.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThemeModule,
    CoreModule,
    FeaturesModule,
    SHARED_ROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
