import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ManageActions } from '../../+state/manage.actions';
import { ManageFacade } from '../../+state/manage.facade';
import { CompressionTest } from '../../+state/manage.model';

@Component({
  selector: 'app-add-compression',
  template: `
    <form class="addCompression-form" [formGroup]="addCompressionForm">
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
          *ngIf="addCompressionForm.controls.materialControl.hasError('required')"
          >Material is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="title-section">
        <mat-label>Test title</mat-label>
        <input matInput formControlName="titleControl" />
        <mat-error
          *ngIf="addCompressionForm.controls.titleControl.hasError('required')"
          >Test title is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="description-section">
        <mat-label>Description</mat-label>
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
            addCompressionForm.controls.descriptionControl.hasError('required')
          "
          >Description is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="author-section">
        <mat-label>Test author</mat-label>
        <input matInput formControlName="testAuthorControl" />
        <mat-error
          *ngIf="
            addCompressionForm.controls.testAuthorControl.hasError('required')
          "
          >Test author is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="machine-section">
        <mat-label>Machine info</mat-label>
        <input matInput formControlName="machineInfoControl" />
        <mat-error
          *ngIf="
            addCompressionForm.controls.machineInfoControl.hasError('required')
          "
          >Machine info is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="initialForce-section">
        <mat-label>Initial force</mat-label>
        <input matInput type="number" formControlName="initialForceControl" />
        <mat-error
          *ngIf="
            addCompressionForm.controls.initialForceControl.hasError('required')
          "
          >Initial force is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="compModule-section">
        <mat-label>Compression module speed</mat-label>
        <input
          matInput
          type="number"
          formControlName="compressionModuleControl"
        />
        <mat-error
          *ngIf="
            addCompressionForm.controls.compressionModuleControl.hasError(
              'required'
            )
          "
          >Compression module speed is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="yeld-section">
        <mat-label>Yeld point speed</mat-label>
        <input matInput type="number" formControlName="yeldPointControl" />
        <mat-error
          *ngIf="
            addCompressionForm.controls.yeldPointControl.hasError('required')
          "
          >Yeld point speed is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="testSpeed-section">
        <mat-label>Test speed</mat-label>
        <input matInput type="number" formControlName="testSpeedControl" />
        <mat-error
          *ngIf="
            addCompressionForm.controls.testSpeedControl.hasError('required')
          "
          >Test speed is required!</mat-error
        >
      </mat-form-field>
      <button mat-raised-button (click)="onSubmit()">Add research</button>
    </form>
  `,
  styleUrls: ['./add-compression.component.scss'],
})
export class AddCompressionComponent implements OnInit {
  addCompressionForm = new FormGroup({
    materialControl: new FormControl('', [Validators.required]),
    titleControl: new FormControl('', [Validators.required]),
    descriptionControl: new FormControl('', [Validators.required]),
    testAuthorControl: new FormControl('', [Validators.required]),
    machineInfoControl: new FormControl('', [Validators.required]),
    initialForceControl: new FormControl('', [Validators.required]),
    compressionModuleControl: new FormControl('', [Validators.required]),
    yeldPointControl: new FormControl('', [Validators.required]),
    testSpeedControl: new FormControl('', [Validators.required]),
  });

  newCompressionTest: CompressionTest;
  constructor(public manageFacade: ManageFacade, private store: Store<any>) {}

  ngOnInit(): void {}
  onSubmit(): void {
    if (this.addCompressionForm.valid) {
      this.newCompressionTest = {
        id: null,
        materialId: this.addCompressionForm.controls.materialControl.value,
        title: this.addCompressionForm.controls.titleControl.value,
        description: this.addCompressionForm.controls.descriptionControl.value,
        testAuthor: this.addCompressionForm.controls.testAuthorControl.value,
        machineInfo: this.addCompressionForm.controls.machineInfoControl.value,
        initialForce: this.addCompressionForm.controls.initialForceControl.value,
        compressionModuleSpeed: this.addCompressionForm.controls.compressionModuleControl.value,
        yeldPointSpeed: this.addCompressionForm.controls.yeldPointControl.value,
        testSpeed: this.addCompressionForm.controls.testSpeedControl.value
      };

      this.store.dispatch(
        ManageActions.addCompressionTestButtonClicked({
          newCompressionTest: this.newCompressionTest
        })
      );
    }
  }
}
