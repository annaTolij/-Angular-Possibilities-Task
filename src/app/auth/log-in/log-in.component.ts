import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/api/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    this.authService.postLogIn(this.loginForm.value).subscribe(res => {
      this.openSnackBar(res);
    },
      error => {
        this.openSnackBar(error.message);
      })
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'ok', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  getPassErrorMessage() {
    return this.loginForm.controls.password.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessage() {
    return this.loginForm.controls.login.hasError('required') ? 'You must enter a value' :
      this.loginForm.controls.login.hasError('email') ? 'Not a valid email' :
        '';
  }
}
