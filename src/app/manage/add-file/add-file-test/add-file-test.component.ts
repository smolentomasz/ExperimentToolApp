import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
        <mat-select formControlName="researchNameControl" >
          <mat-option
            *ngFor="let research of this.researches$ | async"
            [value]="research.title"
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
      <button mat-raised-button (click)="onSubmit()">Add new file</button>
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
    additionalControl: new FormControl('', [Validators.required]),
  });
  referenceType: string;
  referenceTypeName: string;
  private newAdditonalFile: NewAdditionalFile;
  isResearchTypePicked = false;
  constructor(public manageFacade: ManageFacade, private store: Store<any>) {}

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
        this.addFileTestForm.controls.researchNameControl.value;

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
    }
  }
  changeOption(event): void {
    this.researches$ = this.manageFacade.getResearches(event.value);
    this.isResearchTypePicked = true;
  }
  previewImage(event): void {
    this.selectedFile = event.target.files[0];
  }
}
