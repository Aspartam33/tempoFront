import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MaterialModule } from '../material/material.module';

import { ChartsComponent } from './charts/charts.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectComponent } from './select/select.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { TableComponent } from './table/table.component';

import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { PaymentMessageComponent } from './payment-message/payment-message.component';
import { CardComponent } from './card/card.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    ChartsComponent,
    CardComponent,
    FooterComponent,
    NavbarComponent,
    SelectComponent,
    SlideToggleComponent,
    TableComponent,
    PaymentMessageComponent

  ], exports: [
    ChartsComponent,
    CardComponent,
    FooterComponent,
    NavbarComponent,
    SelectComponent,
    SlideToggleComponent,
    TableComponent,
    PaymentMessageComponent,
  ],
  imports: [
    CommonModule,

    MaterialModule,
    RouterModule,
    DashboardRoutingModule,

    RouterModule,
   

  ]
})
export class SharedModule { }
