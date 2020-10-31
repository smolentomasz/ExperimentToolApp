import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-sidenav></app-sidenav>
    <div class='container'>
      <app-header></app-header>
      <div class='router'>
      <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ExperimentToolApp';
}
