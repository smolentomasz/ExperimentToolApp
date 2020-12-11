import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ManageActions } from '../../+state/manage.actions';
import { ManageFacade } from '../../+state/manage.facade';
import {
  CompressionTest,
  NewTensileResult,
  ResearchType,
  TensileTest,
} from '../../+state/manage.model';

@Component({
  selector: 'app-add-tensile-results',
  template: `
    <form class="addResults-form" [formGroup]="addResultsTensileForm">
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
          addResultsTensileForm.controls.researchNameControl.hasError('required')
          "
          >Research name is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="attempt-section">
        <mat-label>Attempt number</mat-label>
        <input matInput formControlName="attemptControl" type="number" />
        <mat-error
          *ngIf="addResultsTensileForm.controls.attemptControl.hasError('required')"
          >Attempt number is required!</mat-error
        >
      </mat-form-field>
        <mat-form-field class="L0-section">
          <mat-label>L<sub>0</sub></mat-label>
          <input matInput formControlName="L0Control" type="number" />
          <mat-error
            *ngIf="addResultsTensileForm.controls.L0Control.hasError('required')"
            >L<sub>0</sub> is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field class="Lu-section">
          <mat-label>L<sub>u</sub></mat-label>
          <input matInput formControlName="LuControl" type="number" />
          <mat-error
            *ngIf="addResultsTensileForm.controls.LuControl.hasError('required')"
            >L<sub>u</sub> is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field class="Lc-section">
          <mat-label>L<sub>c</sub></mat-label>
          <input matInput formControlName="LcControl" type="number" />
          <mat-error
            *ngIf="addResultsTensileForm.controls.LcControl.hasError('required')"
            >L<sub>c</sub> is required!</mat-error
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
        *ngIf="addResultsTensileForm.controls.resultControl.hasError('required')"
        >Results file is required!</mat-error
      >
      <button mat-raised-button (click)="onSubmit()" type="button" [disabled]="!isValid()" *ngIf='!(manageFacade.selectisTensileResultAdding$ | async)'>Add results</button>
      <mat-spinner [diameter]="35" *ngIf='(manageFacade.selectisTensileResultAdding$ | async)'></mat-spinner>
    </form>
  `,
  styleUrls: ['./add-tensile-results.component.scss'],
})
export class AddTensileResultsComponent implements OnInit {
  @Input() testType: ResearchType;
  ResearchType = ResearchType;
  researches$: Observable<TensileTest[] | CompressionTest[]>;
  selectedFile: File = null;
  newTensileResult: NewTensileResult;
  addResultsTensileForm = new FormGroup({
    researchNameControl: new FormControl('', [Validators.required]),
    attemptControl: new FormControl('', [Validators.required]),
    L0Control: new FormControl('', [Validators.required]),
    LuControl: new FormControl('', [Validators.required]),
    LcControl: new FormControl('', [Validators.required]),
    resultControl: new FormControl('', [Validators.required]),
  });
  constructor(public manageFacade: ManageFacade, private store: Store<any>) {}

  ngOnInit(): void {
    this.researches$ = this.manageFacade.getResearches(this.testType);
  }
  onSubmit(): void {
    if (this.addResultsTensileForm.valid) {
      const newResultFormData = new FormData();
      newResultFormData.append(
        'file',
        this.selectedFile,
        this.selectedFile.name
      );

      this.newTensileResult = {
        attemptNumber: this.addResultsTensileForm.controls.attemptControl.value,
        testId: this.addResultsTensileForm.controls.researchNameControl.value,
        l0: this.addResultsTensileForm.controls.L0Control.value,
        lu: this.addResultsTensileForm.controls.LuControl.value,
        lc: this.addResultsTensileForm.controls.LcControl.value,
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
      this.addResultsTensileForm.reset();
    }
  }
  isValid(): boolean{
    return this.addResultsTensileForm.valid;
  }
  previevResultFile(event): void {
    this.selectedFile = event.target.files[0];
  }
}
