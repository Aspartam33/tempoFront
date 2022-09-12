import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ElectronicDebitComponent } from './pages/electronic-debit/electronic-debit.component';
import { VerificatioDebitComponent } from './pages/verificatio-debit/verificatio-debit.component';
import { ReceiptDebitComponent } from './pages/receipt-debit/receipt-debit.component';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CodePhonePipe } from './pipes/code-phone.pipe';


const appRoutes: Routes = [
  { path: 'check-debit', component: VerificatioDebitComponent },
  { path: 'recipt-debit', component: ReceiptDebitComponent }
]

@NgModule({

  declarations: [
    ElectronicDebitComponent,
    VerificatioDebitComponent,
    ReceiptDebitComponent,
    CodePhonePipe
  ],
  exports:[
    VerificatioDebitComponent,
    ReceiptDebitComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    ReactiveFormsModule
  ]
})
export class ElectronicDebitModule { }
