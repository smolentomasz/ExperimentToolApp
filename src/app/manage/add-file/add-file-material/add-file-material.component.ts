import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ManageActions } from '../../+state/manage.actions';
import { ManageFacade } from '../../+state/manage.facade';
import { NewAdditionalFile } from '../../+state/manage.model';

@Component({
  selector: 'app-add-file-material',
  template: `
   <form class="addFileMaterial-form" [formGroup]="addFileMaterialForm">
    <mat-form-field appearance="fill">
          <mat-label>Select a material</mat-label>
          <mat-select formControlName="materialControl">
            <mat-option
              *ngFor="let material of manageFacade.materials$ | async"
              [value]="material.name"
            >
              {{ material.name }}
            </mat-option>
          </mat-select>
          <mat-error
            *ngIf="addFileMaterialForm.controls.materialControl.hasError('required')"
            >Material is required!</mat-error
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
          *ngIf="addFileMaterialForm.controls.additionalControl.hasError('required')"
          >Additional file is required!</mat-error
        >
        <button mat-raised-button (click)="onSubmit()">Add new file</button>
</form>
  `,
  styleUrls: ['./add-file-material.component.scss']
})
export class AddFileMaterialComponent implements OnInit {
  selectedFile: File = null;
  addFileMaterialForm = new FormGroup({
    materialControl: new FormControl('', [Validators.required]),
    additionalControl: new FormControl('', [Validators.required]),
  });
  referenceType: string;
  referenceTypeName: string;
  private newAdditonalFile: NewAdditionalFile;
  constructor(public manageFacade: ManageFacade, private store: Store<any>) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.addFileMaterialForm.valid) {
      const newAdditionalFileFormData = new FormData();
      newAdditionalFileFormData.append(
        'file',
        this.selectedFile,
        this.selectedFile.name
      );

      this.referenceType = 'Material';
      this.referenceTypeName =
        this.addFileMaterialForm.controls.materialControl.value;

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
  previewImage(event): void {
    this.selectedFile = event.target.files[0];
  }

}
