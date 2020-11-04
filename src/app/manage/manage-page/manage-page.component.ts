import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./manage-page.component.scss']
})
export class ManagePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
