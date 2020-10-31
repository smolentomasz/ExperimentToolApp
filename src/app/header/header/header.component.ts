import { Component, OnInit } from '@angular/core';

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
        <app-login-menu></app-login-menu>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
