import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationZelleComponent } from './pages/validation-zelle/validation-zelle.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReciptZelleComponent } from './pages/recipt-zelle/recipt-zelle.component';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MAT_DATE_LOCALE} from '@angular/material/core';

@NgModule({
  declarations: [
    ValidationZelleComponent,
    ReciptZelleComponent
  ],
  exports:[
    ValidationZelleComponent,
    ReciptZelleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    MatNativeDateModule, 
    MatDatepickerModule,
    RouterModule.forRoot([
      {path: 'recipt-zelle', component: ReciptZelleComponent},
    
    
    ])
  ], 
  providers:[
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})
export class ValidationZelleModule { }
