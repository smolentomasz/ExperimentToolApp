import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-page',
  template: `
    <p>
      material-page works!
    </p>
  `,
  styleUrls: ['./material-page.component.scss']
})
export class MaterialPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
