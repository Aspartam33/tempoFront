// ----Angular---- //
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// ----Modules---- //
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ChangePocketModule } from './change-pocket/change-pocket.module';
import { ElectronicDebitModule } from './electronic-debit/electronic-debit.module';
import { ValidationZelleModule } from './validation-zelle/validation-zelle.module';
import { UserManagementModule } from './user-management/user-management.module';
import { InternationalCardModule } from './international-card/international-card.module';

// ----Ngx-Bootstrap---- //
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    HomeModule,
    InternationalCardModule,
    SharedModule,
    ChangePocketModule,
    ElectronicDebitModule,
    ValidationZelleModule,
    InternationalCardModule,
    UserManagementModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
