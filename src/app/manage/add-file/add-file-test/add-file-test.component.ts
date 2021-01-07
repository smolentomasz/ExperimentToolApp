import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AnalysisActions } from 'src/app/analysis/state+/analysis.actions';
import { AnalysisFacade } from 'src/app/analysis/state+/analysis.facade';
import { ManageActions } from '../../+state/manage.actions';
import { ManageFacade } from '../../+state/manage.facade';
import {
  CompressionTest,
  NewAdditionalFile,
  ResearchType,
  TensileTest,
} from '../../+state/manage.model';

@Component({
  selector: 'app-add-file-test',
  template: `
    <form class="addFileTest-form" [formGroup]="addFileTestForm">
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
            addFileTestForm.controls.researchTypeControl.hasError('required')
          "
          >Type of research is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field appearance="fill" *ngIf="isResearchTypePicked">
        <mat-label>Research name</mat-label>
        <mat-select
          formControlName="researchNameControl"
          (selectionChange)="changeTestName($event)"
        >
          <mat-option
            *ngFor="let research of this.researches$ | async"
            [value]="research"
          >
            {{ research.title }}
          </mat-option>
        </mat-select>
        <mat-error
          *ngIf="
            addFileTestForm.controls.researchNameControl.hasError('required')
          "
          >Research name is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field apperance="fill" *ngIf="isResearchNamePicked">
        <mat-label>Attempt number</mat-label>
        <mat-select formControlName="researchAttemptControl">
          <mat-option
            *ngFor="
              let attempt of analyisFacade.getAttemptsByTestId(
                this.addFileTestForm.controls.researchNameControl.value.id,
                this.addFileTestForm.controls.researchTypeControl.value
              ) | async
            "
            [value]="attempt"
          >
            {{ attempt }}
          </mat-option>
        </mat-select>
        <mat-error
          *ngIf="
            addFileTestForm.controls.researchAttemptControl.hasError('required')
          "
          >Attempt number is required!</mat-error
        >
      </mat-form-field>
      <input
        type="file"
        #txtFileInput
        (change)="previewImage($event)"
        class="upload-material"
        formControlName="additionalControl"
      />
      <mat-error
        *ngIf="addFileTestForm.controls.additionalControl.hasError('required')"
        >Additional file is required!</mat-error
      >
      <button
        mat-raised-button
        (click)="onSubmit()"
        type="button"
        [disabled]="!isValid()"
        *ngIf="!(manageFacade.selectIsAdditionalFileAdding$ | async)"
      >
        Add new file
      </button>
      <mat-spinner
        [diameter]="35"
        *ngIf="manageFacade.selectIsAdditionalFileAdding$ | async"
      ></mat-spinner>
    </form>
  `,
  styleUrls: ['./add-file-test.component.scss'],
})
export class AddFileTestComponent implements OnInit {
  ResearchType = ResearchType;
  researches$: Observable<TensileTest[] | CompressionTest[]>;
  selectedFile: File = null;
  addFileTestForm = new FormGroup({
    researchTypeControl: new FormControl('', [Validators.required]),
    researchNameControl: new FormControl('', [Validators.required]),
    researchAttemptControl: new FormControl('', [Validators.required]),
    additionalControl: new FormControl('', [Validators.required]),
  });
  referenceType: string;
  referenceTypeName: string;
  private newAdditonalFile: NewAdditionalFile;
  isResearchTypePicked = false;
  isResearchNamePicked = false;
  constructor(
    public manageFacade: ManageFacade,
    private store: Store<any>,
    public analyisFacade: AnalysisFacade
  ) {}

  ngOnInit(): void {}
  onSubmit(): void {
    if (this.addFileTestForm.valid) {
      const newAdditionalFileFormData = new FormData();
      newAdditionalFileFormData.append(
        'file',
        this.selectedFile,
        this.selectedFile.name
      );

      this.referenceType = 'Research';
      this.referenceTypeName =
        this.addFileTestForm.controls.researchTypeControl.value +
        ', ' +
        this.addFileTestForm.controls.researchNameControl.value.title +
        ' - attempt ' +
        this.addFileTestForm.controls.researchAttemptControl.value;

      this.newAdditonalFile = {
        referenceType: this.referenceType,
        referenceTypeName: this.referenceTypeName,
      };

      newAdditionalFileFormData.append(
        'aditionalDetails',
        JSON.stringify(this.newAdditonalFile)
      );

      this.store.dispatch(
        ManageActions.addAdditionalFileButtonClicked({
          additionalFileForm: newAdditionalFileFormData,
        })
      );
      this.addFileTestForm.reset();
      this.isResearchTypePicked = false;
      this.isResearchNamePicked = false;
    }
  }
  isValid(): boolean {
    return this.addFileTestForm.valid;
  }
  changeOption(event): void {
    this.researches$ = this.manageFacade.getResearches(event.value);
    this.isResearchTypePicked = true;
    this.addFileTestForm.patchValue({
      researchNameControl: '',
      researchAttemptControl: '',
    });
  }
  changeTestName(event): void {
    if (this.addFileTestForm.controls.researchTypeControl.value === 'Tensile') {
      this.store.dispatch(
        AnalysisActions.researchNameTensileChanged({
          testId: event.value.id,
        })
      );
    } else {
      this.store.dispatch(
        AnalysisActions.researchNameCompressionChanged({
          testId: event.value.id,
        })
      );
    }
    this.isResearchNamePicked = true;
  }
  previewImage(event): void {
    this.selectedFile = event.target.files[0];
  }
}
