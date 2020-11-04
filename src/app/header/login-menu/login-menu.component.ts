import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HeaderActions } from '../+state/header.actions';

@Component({
  selector: 'app-login-menu',
  template: `
    <div class="login-panel">
      <form class="login-form" [formGroup]="loginForm">
        <mat-form-field class="login-section">
          <mat-label>Login</mat-label>
          <input matInput formControlName="loginControl" [attr.disabled]="isLoginLoading || null"/>
          <mat-error
            *ngIf="loginForm.controls.loginControl.hasError('required')"
            >Login is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field class="password-section">
          <mat-label>Password</mat-label>
          <input
            matInput
            [type]="hide ? 'password' : 'text'"
            formControlName="passwordControl"
            [attr.disabled]="isLoginLoading  || null"
          />
          <mat-error
            *ngIf="loginForm.controls.passwordControl.hasError('required')"
            >Password is required!</mat-error
          >
        </mat-form-field>
        <button mat-raised-button (click)="onSubmit()" [disabled]="isLoginLoading">Login</button>
      </form>
    </div>
  `,
  styleUrls: ['./login-menu.component.scss'],
})
export class LoginMenuComponent implements OnInit {
  @Input() isLoginLoading: boolean;
  hide = true;
  loginForm = new FormGroup({
    loginControl: new FormControl('', [Validators.required]),
    passwordControl: new FormControl('', [Validators.required]),
  });
  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(
        HeaderActions.loginButtonClicked({
          user: {
            username: this.loginForm.controls.loginControl.value,
            password: this.loginForm.controls.passwordControl.value,
          },
        })
      );
    }
  }
}
