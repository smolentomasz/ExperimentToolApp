import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <div class="main-sidenav">
    <div class="analyse-section section" >
    <span>Analyze</span>
        <i class="material-icons md-light md-30" [routerLink]="['/analysis/data-analysis']" [routerLinkActive]="'is-active'" matTooltip="Analysis" matTooltipPosition='right'>analytics</i>
        <i class="material-icons md-light md-30" [routerLink]="['/analysis/material']" [routerLinkActive]="'is-active'" matTooltip="Texture gallery" matTooltipPosition='right'>collections</i>
        <i class="material-icons md-light md-30" [routerLink]="['/analysis/texture']" [routerLinkActive]="'is-active'" matTooltip="Ebsd gallery" matTooltipPosition='right'>texture</i>
      </div>
      <div class="management-section section">
        <span>Manage</span>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-research']" [routerLinkActive]="'is-active'" matTooltip="Add new test" matTooltipPosition='right'>note_add</i>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-result']" [routerLinkActive]="'is-active'" matTooltip="Add test results" matTooltipPosition='right'>post_add</i>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-material']" [routerLinkActive]="'is-active'" matTooltip="Add new material" matTooltipPosition='right'>add_to_photos</i>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-texture']" [routerLinkActive]="'is-active'" matTooltip="Add ebsd texture" matTooltipPosition='right'>add_photo_alternate</i>
        <i class="material-icons md-light md-30" [routerLink]="['/manage/add-file']" [routerLinkActive]="'is-active'" matTooltip="Add new additional file" matTooltipPosition='right'>attach_file</i>
      </div>
    </div>
  `,
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
