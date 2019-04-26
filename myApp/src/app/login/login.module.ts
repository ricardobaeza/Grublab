import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        SharedModule,
    ],
  declarations: [LoginPage, SigninComponent, SignupComponent]
})
export class LoginPageModule {}
