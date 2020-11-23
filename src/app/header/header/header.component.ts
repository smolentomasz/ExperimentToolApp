import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeaderActions } from '../+state/header.actions';
import { HeaderFacade } from '../+state/header.facade';

@Component({
  selector: 'app-header',
  template: `
    <div class="header-main">
      <div class="header-title">
        <img
          src="./assets/images/logo-agh.png"
          alt="agh-logo"
          class="agh-logo"
        />
        <span class="header-app-name">Experiment Tool</span>
      </div>
      <div class="header-login">
        <app-login-menu
          *ngIf="!(headerFacade.user$ | async)"
          [isLoginLoading]="headerFacade.isLoginLoading$ | async"
        >
        </app-login-menu>
        <div *ngIf="headerFacade.user$ | async as user" class="login-info">
          Zalogowany użytkownik: {{ user.username }}
          <button mat-raised-button (click)="onLogout()">Logout</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public headerFacade: HeaderFacade, private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(HeaderActions.headerInit());
  }
  onLogout(): void {
    
  }
}
