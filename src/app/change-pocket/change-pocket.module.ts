
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ChangePocketComponent } from './pages/change-pocket/change-pocket.component';
import { VerificationChangeComponent } from './pages/verification-change/verification-change.component';
import { ReceiptChangeComponent } from './pages/receipt-change/receipt-change.component';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CodeBankPipe } from './pipes/code-bank.pipe';
import { CodePhonePipe } from './pipes/code-phone.pipe';
import { MessageResponsePipe } from './pipes/message-response.pipe';



const appRoutes: Routes = [
  {path:'check-change', component:VerificationChangeComponent},
  {path:'recipt-change', component:ReceiptChangeComponent}
]


@NgModule({
  declarations: [
    ChangePocketComponent,
    VerificationChangeComponent,
    ReceiptChangeComponent,
    CodeBankPipe,
    CodePhonePipe,
    MessageResponsePipe,
  ],
  exports:[
    ChangePocketComponent,
    VerificationChangeComponent,
    CodePhonePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    ReactiveFormsModule
  ]
})
export class ChangePocketModule { }
