import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ManageActions } from '../../+state/manage.actions';
import { ManageFacade } from '../../+state/manage.facade';
import {
  CompressionTest,
  NewCompressionResult,
  ResearchType,
  TensileTest,
} from '../../+state/manage.model';

@Component({
  selector: 'app-add-compression-results',
  template: `
      <form class="addResults-form" [formGroup]="addResultsCompressionForm">
        <mat-form-field appearance="fill">
          <mat-label>Research name</mat-label>
          <mat-select formControlName="researchNameControl">
            <mat-option
              *ngFor="let research of this.researches$ | async"
              [value]="research.id"
            >
              {{ research.title }}
            </mat-option>
          </mat-select>
          <mat-error
            *ngIf="
            addResultsCompressionForm.controls.researchNameControl.hasError('required')
            "
            >Research name is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field class="attempt-section">
          <mat-label>Attempt number</mat-label>
          <input matInput formControlName="attemptControl" type="number" />
          <mat-error
            *ngIf="addResultsCompressionForm.controls.attemptControl.hasError('required')"
            >Attempt number is required!</mat-error
          >
        </mat-form-field>
          <mat-form-field class="d0-section">
            <mat-label>d<sub>0</sub></mat-label>
            <input matInput formControlName="d0Control" type="number" />
            <mat-error
              *ngIf="addResultsCompressionForm.controls.d0Control.hasError('required')"
              >d<sub>0</sub> is required!</mat-error
            >
          </mat-form-field>
          <mat-form-field class="h0-section">
            <mat-label>h<sub>0</sub></mat-label>
            <input matInput formControlName="h0Control" type="number" />
            <mat-error
              *ngIf="addResultsCompressionForm.controls.h0Control.hasError('required')"
              >h<sub>0</sub> is required!</mat-error
            >
          </mat-form-field>
          <mat-form-field class="S0-section">
            <mat-label>S<sub>0</sub></mat-label>
            <input matInput formControlName="S0Control" type="number" />
            <mat-error
              *ngIf="addResultsCompressionForm.controls.S0Control.hasError('required')"
              >S<sub>0</sub> is required!</mat-error
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
          *ngIf="addResultsCompressionForm.controls.resultControl.hasError('required')"
          >Results file is required!</mat-error
        >
        <button mat-raised-button (click)="onSubmit()" type="button" [disabled]="!isValid()" *ngIf='!(manageFacade.selectisCompressionResultAdding$ | async)'>Add results</button>
        <mat-spinner [diameter]="35" *ngIf='(manageFacade.selectisCompressionResultAdding$ | async)'></mat-spinner>
      </form>
  `,
  styleUrls: ['./add-compression-results.component.scss'],
})
export class AddCompressionResultsComponent implements OnInit {
  @Input() testType: ResearchType;
  ResearchType = ResearchType;
  researches$: Observable<TensileTest[] | CompressionTest[]>;
  private selectedFile: File = null;
  private newCompressionResult: NewCompressionResult;
  addResultsCompressionForm = new FormGroup({
    researchNameControl: new FormControl('', [Validators.required]),
    attemptControl: new FormControl('', [Validators.required]),
    d0Control: new FormControl('', [Validators.required]),
    h0Control: new FormControl('', [Validators.required]),
    S0Control: new FormControl('', [Validators.required]),
    resultControl: new FormControl('', [Validators.required]),
  });
  constructor(public manageFacade: ManageFacade, private store: Store<any>) {}

  ngOnInit(): void {
    this.researches$ = this.manageFacade.getResearches(this.testType);
  }
  onSubmit(): void {
    if (this.addResultsCompressionForm.valid) {
      const newResultFormData = new FormData();
      newResultFormData.append(
        'file',
        this.selectedFile,
        this.selectedFile.name
      );

      this.newCompressionResult = {
        attemptNumber: this.addResultsCompressionForm.controls.attemptControl.value,
        testId: this.addResultsCompressionForm.controls.researchNameControl.value,
        d0: this.addResultsCompressionForm.controls.d0Control.value,
        h0: this.addResultsCompressionForm.controls.h0Control.value,
        s0: this.addResultsCompressionForm.controls.S0Control.value,
      };
      newResultFormData.append(
        'compressionResultDetails',
        JSON.stringify(this.newCompressionResult)
      );
      this.store.dispatch(
        ManageActions.addCompressionTestResultButtonClicked({
          compressionResultForm: newResultFormData,
        })
      );
      this.addResultsCompressionForm.reset()
    }
  }
  isValid(): boolean{
    return this.addResultsCompressionForm.valid;
  }
  previevResultFile(event): void {
    this.selectedFile = event.target.files[0];
  }
}
