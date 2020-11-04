import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <div class="main-sidenav">
    <div class="analyse-section">
    <span>Analyze</span>
        <i class="material-icons md-light md-30" [routerLink]="['/analysis/data-analysis']">analytics</i>
        <i class="material-icons md-light md-30" [routerLink]="['/analysis/material']">collections</i>
        <i class="material-icons md-light md-30" [routerLink]="['/analysis/texture']">texture</i>
      </div>
      <div class="management-section">
        <span>Manage</span>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-research']">note_add</i>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-result']">post_add</i>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-material']">add_to_photos</i>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-texture']">add_photo_alternate</i>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-file']">attach_file</i>
      </div>
    </div>
  `,
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
