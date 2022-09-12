import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './pages/profiles/edit-profile/edit-profile.component';
import { CreateProfileComponent } from './pages/profiles/create-profile/create-profile.component';

const appRoutes: Routes = [
  { path: 'create-users', component: CreateUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'create-profile', component: CreateProfileComponent }
];

@NgModule({
  declarations: [
    UserManagementComponent,
    CreateUserComponent,
    EditUserComponent,
    EditProfileComponent,
    CreateProfileComponent
  ],exports:[
    UserManagementComponent,
    CreateUserComponent,
    EditUserComponent,
    
  ],
  imports: [
    CommonModule,
   

    MaterialModule,

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
export class UserManagementModule { }
