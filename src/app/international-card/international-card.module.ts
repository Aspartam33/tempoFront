import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { VerificationCardComponent } from './pages/verification-card/verification-card.component';
import { RouterModule, Routes } from '@angular/router';
import { InternationalCardComponent } from './pages/international-card/international-card.component';
import { ReceiptCardComponent } from './pages/receipt-card/receipt-card.component';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { MessageInfo } from './pipes/message-info.pipe';

import { NullWithDefaultPipe } from './pipes/null-deafult.pipe';
import { CardHashPipe } from './pipes/card-hash.pipe';

const appRoutes: Routes = [
  { path: 'check-card', component: VerificationCardComponent },
  { path: 'recipt-card', component: ReceiptCardComponent }
];

@NgModule({

  declarations: [
    InternationalCardComponent,
    VerificationCardComponent,
    ReceiptCardComponent,
    MessageInfo,
    NullWithDefaultPipe,
    CardHashPipe
  ], exports: [InternationalCardComponent, VerificationCardComponent,
    ReceiptCardComponent],

  imports: [
    CommonModule,

    MaterialModule,
    CreditCardDirectivesModule,
    ReactiveFormsModule,
    FormsModule,
 
    SharedModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true,  scrollPositionRestoration: 'enabled'}
    )

  ]
})
export class InternationalCardModule {


 }
