import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/api/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registerForm: FormGroup;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        login: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirm: ['', [Validators.required]],
      },
      {
        validator: (formGroup: FormGroup) => {
          const condition = formGroup.get('password').value !== formGroup.get('confirm').value;

          return condition ? { passwordsDoNotMatch: true } : null;
        },
      },
    );
  }

  save() {
    this.authService.postRegiser(this.registerForm.value).subscribe(res => {
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

  getNameErrorMessage() {
    return this.registerForm.controls.password.hasError('required') ? 'You must enter a value' : '';
  }

  getLoginErrorMessage() {
    return this.registerForm.controls.login.hasError('required')
      ? 'You must enter a value'
      : this.registerForm.controls.login.hasError('email')
        ? 'Not a valid email'
        : '';
  }

  getPasswordErrorMessage() {
    return this.registerForm.controls.password.hasError('required') ? 'You must enter a value' : '';
  }

  getConfirmErrorMessage() {
    return this.registerForm.controls.confirm.hasError('required')
      ? 'You must enter a value'
      : this.registerForm.hasError('passwordsDoNotMatch')
        ? 'Passwords do not match'
        : '';
  }

}
