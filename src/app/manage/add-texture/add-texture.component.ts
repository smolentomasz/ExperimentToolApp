import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ManageActions } from '../+state/manage.actions';
import { ManageFacade } from '../+state/manage.facade';
import { NewTexture } from '../+state/manage.model';

@Component({
  selector: 'app-add-texture',
  template: `
    <div class="addTexture-panel">
    <span class="title">Add new texture</span>
      <form class="addTexture-form" [formGroup]="addTextureForm">
        <mat-form-field appearance="fill">
          <mat-label>Select a material</mat-label>
          <mat-select formControlName="materialControl">
            <mat-option
              *ngFor="let material of manageFacade.materials$ | async"
              [value]="material.id"
            >
              {{ material.name }}
            </mat-option>
          </mat-select>
          <mat-error
            *ngIf="
            addTextureForm.controls.materialControl.hasError('required')
            "
            >Test title is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field class="description-section">
          <mat-label>Ebsd description</mat-label>
          <textarea
            matInput
            cdkTextareaAutosize
            #autosize="cdkTextareaAutosize"
            cdkAutosizeMinRows="1"
            cdkAutosizeMaxRows="10"
            formControlName="descriptionControl"
          ></textarea>
          <mat-error
            *ngIf="
              addTextureForm.controls.descriptionControl.hasError('required')
            "
            >Ebsd description is required!</mat-error
          >
        </mat-form-field>
        <input
          type="file"
          #txtFileInput
          (change)="previewImage($event)"
          class="upload-material"
          formControlName="resultControl"
          accept="text/plain"
        />
        <mat-error
          *ngIf="addTextureForm.controls.resultControl.hasError('required')"
          >Ebsd photo is required!</mat-error
        >
        <button mat-raised-button (click)="onSubmit()" type="button" [disabled]="!isValid()" *ngIf='!(manageFacade.selectisTextureAdding$ | async)'>Add ebsd</button>
        <mat-spinner [diameter]="35" *ngIf='(manageFacade.selectisTextureAdding$ | async)'></mat-spinner>
      </form>
    </div>
  `,
  styleUrls: ['./add-texture.component.scss'],
})
export class AddTextureComponent implements OnInit {
  private selectedFile: File = null;
  private newTexture: NewTexture;
  addTextureForm = new FormGroup({
    materialControl: new FormControl('', [Validators.required]),
    descriptionControl: new FormControl('', [Validators.required]),
    resultControl: new FormControl('', [Validators.required]),
  });
  constructor(public manageFacade: ManageFacade, private store: Store<any>) {}

  ngOnInit(): void {}
  onSubmit(): void {
    if(this.addTextureForm.valid){
      const newTextureFormData = new FormData();
      newTextureFormData.append(
        'file',
        this.selectedFile,
        this.selectedFile.name
      );

      this.newTexture = {
        materialId: this.addTextureForm.controls.materialControl.value,
        textureDescription: this.addTextureForm.controls.descriptionControl.value
      };

      newTextureFormData.append('analysisDetails', JSON.stringify(this.newTexture));

      this.store.dispatch(
        ManageActions.addTextureButtonClicked({
          textureForm: newTextureFormData,
        })
      );
      this.addTextureForm.reset();
    }
  }
  isValid(): boolean{
    return this.addTextureForm.valid;
  }
  previewImage(event): void {
    this.selectedFile = event.target.files[0];
  }
}
