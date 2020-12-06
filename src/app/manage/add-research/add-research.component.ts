import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManageFacade } from '../+state/manage.facade';
import { ResearchType } from '../+state/manage.model';

@Component({
  selector: 'app-add-research',
  template: `
    <div class="addResearch-panel">
    <span class="title">Add new test</span>
    <mat-form-field appearance="fill">
          <mat-label>Type of research</mat-label>
          <mat-select  (selectionChange)="changeOption($event)">
            <mat-option [value]="ResearchType.COMPRESSION">
              {{ ResearchType.COMPRESSION }}
            </mat-option>
            <mat-option [value]="ResearchType.TENSILE">
              {{ ResearchType.TENSILE }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      <app-add-tensile  *ngIf="tensileCheck"></app-add-tensile>
      <app-add-compression *ngIf="compressionCheck"></app-add-compression>
    </div>
  `,
  styleUrls: ['./add-research.component.scss'],
})
export class AddResearchComponent implements OnInit {
  ResearchType = ResearchType;
  compressionCheck = false;
  tensileCheck = false;
 
  constructor(public manageFacade: ManageFacade) {}

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
