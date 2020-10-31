import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-menu',
  template: `
    <div class="login-panel">
      <form class="login-form" [formGroup]="loginForm">
        <mat-form-field class="login-section">
          <mat-label>Login</mat-label>
          <input matInput formControlName='loginControl'/>
          <mat-error *ngIf="loginForm.controls.loginControl.hasError('required')">Login is required!</mat-error>
        </mat-form-field>
        <mat-form-field class="password-section">
          <mat-label>Password</mat-label>
          <input matInput [type]="hide ? 'password' : 'text'" formControlName='passwordControl'/>
          <mat-error *ngIf="loginForm.controls.passwordControl.hasError('required')">Password is required!</mat-error>
        </mat-form-field>
        <button mat-raised-button>Login</button>
      </form>
    </div>
  `,
  styleUrls: ['./login-menu.component.scss'],
})
export class LoginMenuComponent implements OnInit {
  hide = true;
  loginForm = new FormGroup({
    loginControl: new FormControl('', [
      Validators.required
    ]),
    passwordControl: new FormControl('', [
      Validators.required
    ])
  });
  constructor() {}

  ngOnInit(): void {}
}
