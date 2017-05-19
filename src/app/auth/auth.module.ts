import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';

import { routing }       from './auth.routes';
//import { SharedModule } from '../shared/index';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule
    //SharedModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule { }
