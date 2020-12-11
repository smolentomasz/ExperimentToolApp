import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ManageActions } from '../+state/manage.actions';
import { ManageFacade } from '../+state/manage.facade';
import { NewMaterial } from '../+state/manage.model';
import { ManageService } from '../+state/manage.service';

@Component({
  selector: 'app-add-material',
  template: `
    <div class="addMaterial-panel">
    <span class="title">Add new material</span>
      <form class="addMaterial-form" [formGroup]="addMaterialForm">
        <mat-form-field class="name-section">
          <mat-label>Material name</mat-label>
          <input matInput formControlName="nameControl" />
        </mat-form-field>
        <mat-form-field class="additional-section">
          <mat-label>Additional informations</mat-label>
          <textarea
            matInput
            cdkTextareaAutosize
            #autosize="cdkTextareaAutosize"
            cdkAutosizeMinRows="1"
            cdkAutosizeMaxRows="10"
            formControlName="additionalControl"
          ></textarea>
        </mat-form-field>
        <mat-form-field class="chemicalComposition-section">
          <mat-label>Chemical composition</mat-label>
          <textarea
            matInput
            cdkTextareaAutosize
            #autosize="cdkTextareaAutosize"
            cdkAutosizeMinRows="1"
            cdkAutosizeMaxRows="10"
            formControlName="chemicalControl"
          ></textarea>
        </mat-form-field>
        <input
          type="file"
          #imgFileInput
          (change)="previewImage($event)"
          class="upload-material"
        />
        <button mat-raised-button (click)="onSubmit()" type="button" [disabled]="!isValid()" *ngIf='!(manageFacade.selectisMaterialAdding$ | async)'>Add material</button>
        <mat-spinner [diameter]="35" *ngIf='(manageFacade.selectisMaterialAdding$ | async)'></mat-spinner>
      </form>
    </div>
  `,
  styleUrls: ['./add-material.component.scss'],
})
export class AddMaterialComponent implements OnInit {
  addMaterialForm = new FormGroup({
    nameControl: new FormControl('', [Validators.required]),
    additionalControl: new FormControl('', [Validators.required]),
    chemicalControl: new FormControl('', [Validators.required]),
  });
  private selectedFile: File = null;
  private newMaterial: NewMaterial;
  constructor(private store: Store<any>, public manageFacade: ManageFacade) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addMaterialForm.valid) {
      const newMaterialFormData = new FormData();
      newMaterialFormData.append(
        'file',
        this.selectedFile,
        this.selectedFile.name
      );

      this.newMaterial = {
        name: this.addMaterialForm.controls.nameControl.value,
        informations: this.addMaterialForm.controls.additionalControl.value,
        chemicalComposition: this.addMaterialForm.controls.chemicalControl
          .value,
      };

      newMaterialFormData.append(
        'materialDetails',
        JSON.stringify(this.newMaterial)
      );

      this.store.dispatch(
        ManageActions.addMaterialButtonClicked({
          materialForm: newMaterialFormData,
        })
      );
      this.addMaterialForm.reset();
    }
  }
  isValid(): boolean{
    return this.addMaterialForm.valid;
  }
  previewImage(event): void {
    this.selectedFile = event.target.files[0];
  }
}
