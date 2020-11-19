import { Component, OnInit } from '@angular/core';
import { AnalysisFacade } from '../state+/analysis.facade';

@Component({
  selector: 'app-texture-page',
  template: `
   <div class='texture-content'>
      <mat-card
        class="texture-card"
        *ngFor="let texture of analysisFacade.textures$ | async"
      >
        <mat-card-header>
          <mat-card-title class='header-title'>{{ texture.material.name }}</mat-card-title>
        </mat-card-header>
        <img mat-card-image [src]="createImagePath(texture.ebsdPhoto)" class='texture-image'/>    
        <mat-card-content class='card-content'>
        <mat-label class='title-label'> Ebsd description </mat-label>
          {{ texture.ebsdDescription }}
        </mat-card-content>
      </mat-card>
</div>
  `,
  styleUrls: ['./texture-page.component.scss']
})
export class TexturePageComponent implements OnInit {

  constructor(public analysisFacade: AnalysisFacade) { }

  ngOnInit(): void {
  }
  createImagePath(textureUrl: string): string {
    return 'https://localhost:5001/' + textureUrl;
  }
}
