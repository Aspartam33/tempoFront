import { ElectronicDebitComponent } from './electronic-debit/pages/electronic-debit/electronic-debit.component';
// ----Angular---- //
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//  ----Pages---- //
import { LoginComponent } from './auth/pages/login/login.component';
import { ChangePocketComponent } from './change-pocket/pages/change-pocket/change-pocket.component';
import { HomeComponent } from './home/home/home.component';
import { InternationalCardComponent } from './international-card/pages/international-card/international-card.component';
import { UserManagementComponent } from './user-management/pages/user-management/user-management.component';
import { ValidationZelleComponent } from './validation-zelle/pages/validation-zelle/validation-zelle.component';


const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'gestion-usuario',
    component: UserManagementComponent
  },{
    path: 'tarjeta-internacional',
    component: InternationalCardComponent
  },
  {
    path: 'vuelto',
    component: ChangePocketComponent
  },
  {
    path: 'validar-zelle',
    component: ValidationZelleComponent
  },{
    path: 'debito-electronico',
    component: ElectronicDebitComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
