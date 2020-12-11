import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ManageFacade } from '../+state/manage.facade';
import {
  CompressionTest,
  ResearchType,
  TensileTest,
} from '../+state/manage.model';

@Component({
  selector: 'app-add-result',
  template: `
    <div class="addResults-panel">
      <span class="title">Add results</span>
      <mat-form-field appearance="fill">
          <mat-label>Type of research</mat-label>
          <mat-select
            (selectionChange)="changeOption($event)"
          >
            <mat-option [value]="ResearchType.COMPRESSION">
              {{ ResearchType.COMPRESSION }}
            </mat-option>
            <mat-option [value]="ResearchType.TENSILE">
              {{ ResearchType.TENSILE }}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <app-add-tensile-results  *ngIf="tensileCheck" [testType]="ResearchType.TENSILE"></app-add-tensile-results>
      <app-add-compression-results *ngIf="compressionCheck" [testType]="ResearchType.COMPRESSION"></app-add-compression-results>
    </div>
  `,
  styleUrls: ['./add-result.component.scss'],
})
export class AddResultComponent implements OnInit {
  ResearchType = ResearchType;
  compressionCheck = false;
  tensileCheck = false;
  researches$: Observable<TensileTest[] | CompressionTest[]>;
 
  constructor(public manageFacade: ManageFacade, private store: Store<any>) {}

  ngOnInit(): void {}
  changeOption(event): void {
    if (event.value === 'Compression') {
      this.compressionCheck = true;
      this.tensileCheck = false;
    } else {
      this.compressionCheck = false;
      this.tensileCheck = true;
    }
  }

}
