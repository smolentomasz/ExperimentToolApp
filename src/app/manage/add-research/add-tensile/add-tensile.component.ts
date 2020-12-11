import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ManageActions } from '../../+state/manage.actions';
import { ManageFacade } from '../../+state/manage.facade';
import { TensileTest } from '../../+state/manage.model';

@Component({
  selector: 'app-add-tensile',
  template: `
    <form class="addTensile-form" [formGroup]="addTensileForm">
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
          *ngIf="addTensileForm.controls.materialControl.hasError('required')"
          >Material is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="title-section">
        <mat-label>Test title</mat-label>
        <input matInput formControlName="titleControl" />
        <mat-error
          *ngIf="addTensileForm.controls.titleControl.hasError('required')"
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
            addTensileForm.controls.descriptionControl.hasError('required')
          "
          >Description is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="company-section">
        <mat-label>Company</mat-label>
        <input matInput formControlName="companyControl" />
        <mat-error
          *ngIf="addTensileForm.controls.companyControl.hasError('required')"
          >Company is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="standard-section">
        <mat-label>Test standard</mat-label>
        <input matInput formControlName="testStandardControl" />
        <mat-error
          *ngIf="
            addTensileForm.controls.testStandardControl.hasError('required')
          "
          >Test standard is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="machine-section">
        <mat-label>Machine info</mat-label>
        <input matInput formControlName="machineInfoControl" />
        <mat-error
          *ngIf="
            addTensileForm.controls.machineInfoControl.hasError('required')
          "
          >Machine info is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="initialForce-section">
        <mat-label>Initial force</mat-label>
        <input matInput type="number" formControlName="initialForceControl" />
        <mat-error
          *ngIf="
            addTensileForm.controls.initialForceControl.hasError('required')
          "
          >Initial force is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="youngModule-section">
        <mat-label>Young module speed</mat-label>
        <input matInput type="number" formControlName="youngModuleControl" />
        <mat-error
          *ngIf="
            addTensileForm.controls.youngModuleControl.hasError('required')
          "
          >Young module speede is required!</mat-error
        >
      </mat-form-field>
      <mat-form-field class="testSpeed-section">
        <mat-label>Test speed</mat-label>
        <input matInput type="number" formControlName="testSpeedControl" />
        <mat-error
          *ngIf="addTensileForm.controls.testSpeedControl.hasError('required')"
          >Test speed is required!</mat-error
        >
      </mat-form-field>
      <button mat-raised-button (click)="onSubmit()" [disabled]="!isValid()" *ngIf='!(manageFacade.selectisTensileTestAdding$ | async)'>Add test</button>
      <mat-spinner [diameter]="35" *ngIf='(manageFacade.selectisTensileTestAdding$ | async)'></mat-spinner>
    </form>
  `,
  styleUrls: ['./add-tensile.component.scss'],
})
export class AddTensileComponent implements OnInit {
  addTensileForm = new FormGroup({
    materialControl: new FormControl('', [Validators.required]),
    titleControl: new FormControl('', [Validators.required]),
    descriptionControl: new FormControl('', [Validators.required]),
    companyControl: new FormControl('', [Validators.required]),
    testStandardControl: new FormControl('', [Validators.required]),
    machineInfoControl: new FormControl('', [Validators.required]),
    initialForceControl: new FormControl('', [Validators.required]),
    youngModuleControl: new FormControl('', [Validators.required]),
    testSpeedControl: new FormControl('', [Validators.required]),
  });

  newTensileTest: TensileTest;

  constructor(public manageFacade: ManageFacade, private store: Store<any>) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addTensileForm.valid) {
      this.newTensileTest = {
        id: null,
        materialId: this.addTensileForm.controls.materialControl.value,
        title: this.addTensileForm.controls.titleControl.value,
        description: this.addTensileForm.controls.descriptionControl.value,
        company: this.addTensileForm.controls.companyControl.value,
        testStandard: this.addTensileForm.controls.testStandardControl.value,
        machineInfo: this.addTensileForm.controls.machineInfoControl.value,
        initialForce: this.addTensileForm.controls.initialForceControl.value,
        youngModuleSpeed: this.addTensileForm.controls.youngModuleControl.value,
        testSpeed: this.addTensileForm.controls.testSpeedControl.value,
      };

      this.store.dispatch(
        ManageActions.addTensileTestButtonClicked({
          newTensileTest: this.newTensileTest
        })
      );

      this.addTensileForm.reset();
    }
  }
  isValid(): boolean{
    return this.addTensileForm.valid;
  }
}
