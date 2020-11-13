import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <div class="main-sidenav">
    <div class="analyse-section section" >
    <span>Analyze</span>
        <i class="material-icons md-light md-30" [routerLink]="['/analysis/data-analysis']" [routerLinkActive]="'is-active'">analytics</i>
        <i class="material-icons md-light md-30" [routerLink]="['/analysis/material']" [routerLinkActive]="'is-active'">collections</i>
        <i class="material-icons md-light md-30" [routerLink]="['/analysis/texture']" [routerLinkActive]="'is-active'">texture</i>
      </div>
      <div class="management-section section">
        <span>Manage</span>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-research']" [routerLinkActive]="'is-active'">note_add</i>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-result']" [routerLinkActive]="'is-active'">post_add</i>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-material']" [routerLinkActive]="'is-active'">add_to_photos</i>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-texture']" [routerLinkActive]="'is-active'">add_photo_alternate</i>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-file']" [routerLinkActive]="'is-active'">attach_file</i>
      </div>
    </div>
  `,
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
