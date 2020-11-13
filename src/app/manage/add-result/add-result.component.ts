import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ManageFacade } from '../+state/manage.facade';
import { CompressionTest, ResearchType, TensileTest } from '../+state/manage.model';

@Component({
  selector: 'app-add-result',
  template: `
    <div class="addResults-panel">
      <form class="addResults-form" [formGroup]="addResultsForm">
        <mat-form-field appearance="fill">
          <mat-label>Type of research</mat-label>
          <mat-select formControlName="researchTypeControl" (selectionChange)="changeOption($event)">
            <mat-option [value]="ResearchType.COMPRESSION">
              {{ ResearchType.COMPRESSION }}
            </mat-option>
            <mat-option [value]="ResearchType.TENSILE">
              {{ ResearchType.TENSILE }}
            </mat-option>
          </mat-select>
          <mat-error
            *ngIf="
              addResultsForm.controls.researchTypeControl.hasError('required')
            "
            >Type of research is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Research name</mat-label>
          <mat-select formControlName="researchNameControl">
            <mat-option *ngFor="let research of this.researches$ | async" [value]="research.id">
              {{ research.title }}
            </mat-option>
          </mat-select>
          <mat-error
            *ngIf="
              addResultsForm.controls.researchNameControl.hasError('required')
            "
            >Research name is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field class="attempt-section">
          <mat-label>Attempt number</mat-label>
          <input matInput formControlName="attemptControl" type="number" />
          <mat-error
            *ngIf="addResultsForm.controls.attemptControl.hasError('required')"
            >Attempt number is required!</mat-error
          >
        </mat-form-field>
        <input
          type="file"
          #txtFileInput
          (change)="previevResultFile($event)"
          class="upload-material"
          formControlName="resultControl"
          accept="text/plain"
        />
        <mat-error
          *ngIf="addResultsForm.controls.resultControl.hasError('required')"
          >Results file is required!</mat-error
        >
        <button mat-raised-button (click)="onSubmit()">Add results</button>
      </form>
    </div>
  `,
  styleUrls: ['./add-result.component.scss'],
})
export class AddResultComponent implements OnInit {
  ResearchType = ResearchType;
  researches$: Observable<TensileTest[] | CompressionTest[]>;
  private selectedFile: File = null;
  addResultsForm = new FormGroup({
    researchTypeControl: new FormControl('', [Validators.required]),
    researchNameControl: new FormControl('', [Validators.required]),
    attemptControl: new FormControl('', [Validators.required]),
    resultControl: new FormControl('', [Validators.required]),
  });
  constructor(public manageFacade: ManageFacade) {}

  ngOnInit(): void {
   
  }
  onSubmit(): void {}
  changeOption(event): void{
    this.researches$ = this.manageFacade.getResearches(
      event.value
    );
  }
  previevResultFile(event): void {
    this.selectedFile = event.target.files[0];
  }
}
