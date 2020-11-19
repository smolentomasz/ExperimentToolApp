import { Component, OnInit } from '@angular/core';
import { ManageFacade } from 'src/app/manage/+state/manage.facade';
import { manageFeatureKey } from 'src/app/manage/+state/manage.reducer';

@Component({
  selector: 'app-material-page',
  template: `
  <div class='material-content'>
      <mat-card
        class="material-card"
        *ngFor="let material of manageFacade.materials$ | async"
      >
        <mat-card-header>
          <mat-card-title class='header-title'>{{ material.name }}</mat-card-title>
        </mat-card-header>
        <img mat-card-image [src]="createImagePath(material.materialPhoto)" class='material-image'/>    
        <mat-card-content class='card-content'>
        <mat-label class='title-label'> Additional informations </mat-label>
          {{ material.additionalInformations }}
        <mat-label class='title-label'> Chemical composition </mat-label>
        {{ material.chemicalComposition }}
        </mat-card-content>
      </mat-card>
</div>
  `,
  styleUrls: ['./material-page.component.scss'],
})
export class MaterialPageComponent implements OnInit {
  constructor(public manageFacade: ManageFacade) {}

  ngOnInit(): void {}
  createImagePath(materialUrl: string): string {
    return 'https://localhost:5001/' + materialUrl;
  }
}
