import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'angular2-materialize';


@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  declarations: [],
  exports: [
    MaterializeModule
  ]
})
export class ThemeModule { }
