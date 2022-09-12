import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { GeneralComponent } from './pages/general/general.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    GeneralComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    ChartsModule
  ]
})
export class DashboardModule { }
