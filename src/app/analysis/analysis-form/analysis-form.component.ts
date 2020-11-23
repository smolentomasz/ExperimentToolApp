import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ManageFacade } from 'src/app/manage/+state/manage.facade';
import {
  CompressionTest,
  ResearchType,
  TensileTest,
} from 'src/app/manage/+state/manage.model';
import { AnalysisActions } from '../state+/analysis.actions';
import { AnalysisFacade } from '../state+/analysis.facade';

@Component({
  selector: 'app-analysis-form',
  template: `
    <form class="selectData-form" [formGroup]="selectDataForm">
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
            selectDataForm.controls.researchTypeControl.hasError('required')
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
            selectDataForm.controls.researchNameControl.hasError('required')
          "
          >Research name is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="attempt-section">
        <mat-label>Attempt number</mat-label>
        <mat-select formControlName="researchAttemptControl">
          <mat-option *ngFor='let attempt of analyisFacade.getAttemptsByTestId(this.selectDataForm.controls.researchNameControl.value) | async' [value]='attempt'>
          {{attempt}}
          </mat-option>
        </mat-select>
        <mat-error
          *ngIf="
            selectDataForm.controls.researchAttemptControl.hasError('required')
          "
          >Attempt number is required!</mat-error
        >
      </mat-form-field>
    </form>
  `,
  styleUrls: ['./analysis-form.component.scss'],
})
export class AnalysisFormComponent implements OnInit, OnDestroy {
  ResearchType = ResearchType;
  researches$: Observable<TensileTest[] | CompressionTest[]>;
  selectDataForm = new FormGroup({
    researchTypeControl: new FormControl('', [Validators.required]),
    researchNameControl: new FormControl('', [Validators.required]),
    researchAttemptControl: new FormControl('', [Validators.required]),
  });
  destroy$ = new Subject<void>();
  constructor(public manageFacade: ManageFacade, public analyisFacade: AnalysisFacade, private store: Store<any>) {}

  ngOnInit(): void {
    this.selectDataForm.controls.researchNameControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((testId) =>
        this.store.dispatch(AnalysisActions.researchNameChanged({ testId }))
      );
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  changeOption(event): void {
    this.researches$ = this.manageFacade.getResearches(event.value);
  }
}
