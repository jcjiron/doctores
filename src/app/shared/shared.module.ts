import { FormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { GraphComponent } from './components/graph/graph.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    FormsModule,
  ],
  declarations: [
    GraphComponent
  ],
  exports :[
    ChartsModule,
    GraphComponent,
    FormsModule,
  ]
})
export class SharedModule { }
