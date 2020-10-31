import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <div class="main-sidenav">
    <div class="analyse-section">
    <span>Analyze</span>
        <i class="material-icons md-light md-30">analytics</i>
        <i class="material-icons md-light md-30">collections</i>
        <i class="material-icons md-light md-30">texture</i>
      </div>
      <div class="management-section">
        <span>Manage</span>
        <i class="material-icons md-light md-30">note_add</i>
        <i class="material-icons md-light md-30">post_add</i>
        <i class="material-icons md-light md-30">add_to_photos</i>
        <i class="material-icons md-light md-30">add_photo_alternate</i>
        <i class="material-icons md-light md-30">attach_file</i>
      </div>
    </div>
  `,
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
