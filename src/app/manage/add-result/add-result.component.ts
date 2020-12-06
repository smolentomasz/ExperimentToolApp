import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ManageActions } from '../+state/manage.actions';
import { ManageFacade } from '../+state/manage.facade';
import {
  CompressionTest,
  NewCompressionResult,
  NewTensileResult,
  ResearchType,
  TensileTest,
} from '../+state/manage.model';

@Component({
  selector: 'app-add-result',
  template: `
    <div class="addResults-panel">
      <span class="title">Add results</span>
      <form class="addResults-form" [formGroup]="addResultsForm">
        <mat-form-field appearance="fill">
          <mat-label>Type of research</mat-label>
          <mat-select
            formControlName="researchTypeControl"
            (selectionChange)="changeOption($event)"
          >
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
            <mat-option
              *ngFor="let research of this.researches$ | async"
              [value]="research.id"
            >
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
        <div
          class="tensile-parameters"
          *ngIf="
            this.addResultsForm.controls.researchTypeControl.value === 'Tensile'
          "
        >
        <mat-form-field class="L0-section">
          <mat-label>L<sub>0</sub></mat-label>
          <input matInput formControlName="L0Control" type="number" />
          <mat-error
            *ngIf="addResultsForm.controls.L0Control.hasError('required')"
            >L<sub>0</sub> is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field class="Lu-section">
        <mat-label>L<sub>u</sub></mat-label>
          <input matInput formControlName="LuControl" type="number" />
          <mat-error
            *ngIf="addResultsForm.controls.LuControl.hasError('required')"
            >L<sub>u</sub> is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field class="Lc-section">
        <mat-label>L<sub>c</sub></mat-label>
          <input matInput formControlName="LcControl" type="number" />
          <mat-error
            *ngIf="addResultsForm.controls.LcControl.hasError('required')"
            >L<sub>c</sub> is required!</mat-error
          >
        </mat-form-field>
      </div>
        <div
          class="compression-parameters"
          *ngIf="
            this.addResultsForm.controls.researchTypeControl.value ===
            'Compression'
          "
        >
        <mat-form-field class="d0-section">
          <mat-label>d<sub>0</sub></mat-label>
          <input matInput formControlName="d0Control" type="number" />
          <mat-error
            *ngIf="addResultsForm.controls.d0Control.hasError('required')"
            >d<sub>0</sub> is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field class="h0-section">
        <mat-label>h<sub>0</sub></mat-label>
          <input matInput formControlName="h0Control" type="number" />
          <mat-error
            *ngIf="addResultsForm.controls.h0Control.hasError('required')"
            >h<sub>0</sub> is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field class="S0-section">
        <mat-label>S<sub>0</sub></mat-label>
          <input matInput formControlName="S0Control" type="number" />
          <mat-error
            *ngIf="addResultsForm.controls.S0Control.hasError('required')"
            >S<sub>0</sub> is required!</mat-error
          >
        </mat-form-field>
      </div>
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
  private newTensileResult: NewTensileResult;
  private newCompressionResult: NewCompressionResult;
  addResultsForm = new FormGroup({
    researchTypeControl: new FormControl('', [Validators.required]),
    researchNameControl: new FormControl('', [Validators.required]),
    attemptControl: new FormControl('', [Validators.required]),
    L0Control: new FormControl('', [Validators.required]),
    LuControl: new FormControl('', [Validators.required]),
    LcControl: new FormControl('', [Validators.required]),
    d0Control: new FormControl('', [Validators.required]),
    h0Control: new FormControl('', [Validators.required]),
    S0Control: new FormControl('', [Validators.required]),
    resultControl: new FormControl('', [Validators.required]),
  });
  constructor(public manageFacade: ManageFacade, private store: Store<any>) {}

  ngOnInit(): void {}
  onSubmit(): void {
    if (this.addResultsForm.valid) {
      const newResultFormData = new FormData();
      newResultFormData.append(
        'file',
        this.selectedFile,
        this.selectedFile.name
      );

      const testType = this.addResultsForm.controls.researchTypeControl.value;

      if (testType === 'Tensile') {
        this.newTensileResult = {
          attemptNumber: this.addResultsForm.controls.attemptControl.value,
          testId: this.addResultsForm.controls.researchNameControl.value,
          l0: this.addResultsForm.controls.L0Control.value,
          lu: this.addResultsForm.controls.LuControl.value,
          lc: this.addResultsForm.controls.LcControl.value
        };
        newResultFormData.append(
          'tensileResultDetails',
          JSON.stringify(this.newTensileResult)
        );
        this.store.dispatch(
          ManageActions.addTensileTestResultButtonClicked({
            tensileResultForm: newResultFormData,
          })
        );
      } else {
        this.newCompressionResult = {
          attemptNumber: this.addResultsForm.controls.attemptControl.value,
          testId: this.addResultsForm.controls.researchNameControl.value,
          d0: this.addResultsForm.controls.d0Control.value,
          h0: this.addResultsForm.controls.h0Control.value,
          s0: this.addResultsForm.controls.S0Control.value,
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
      }
    }
  }
  changeOption(event): void {
    this.researches$ = this.manageFacade.getResearches(event.value);
  }
  previevResultFile(event): void {
    this.selectedFile = event.target.files[0];
  }
}
