import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthComponent } from './auth.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../api/auth.service';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [LogInComponent, RegistrationComponent, AuthComponent,],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [AuthService],
  entryComponents: [],
})
export class AuthModule { }
