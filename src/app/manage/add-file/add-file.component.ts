import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManageFacade } from '../+state/manage.facade';
import { ResearchType } from '../+state/manage.model';

@Component({
  selector: 'app-add-file',
  template: `
    <div class="addFile-panel">
      <form class="addFile-form" [formGroup]="addFileForm">
        <mat-form-field appearance="fill">
          <mat-label>Select destination</mat-label>
          <mat-select
            (selectionChange)="changeOption($event)"
            formControlName="destinationControl"
          >
            <mat-option *ngFor="let dest of typesOfDestination" [value]="dest">
              {{ dest }}
            </mat-option>
          </mat-select>
          <mat-error
            *ngIf="addFileForm.controls.destinationControl.hasError('required')"
            >Destination is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field appearance="fill" *ngIf="isDestinationResearch">
          <mat-label>Type of research</mat-label>
          <mat-select formControlName="researchControl" (selectionChange)="changeTypeOfResearch($event)">
            <mat-option [value]="ResearchType.COMPRESSION">
              {{ ResearchType.COMPRESSION }}
            </mat-option>
            <mat-option [value]="ResearchType.TENSILE">
              {{ ResearchType.TENSILE }}
            </mat-option>
          </mat-select>
          <mat-error
            *ngIf="addFileForm.controls.researchControl.hasError('required')"
            >Type of research is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field appearance="fill" *ngIf="isResearchPicked">
          <mat-label>Select research</mat-label>
          <mat-select formControlName="researchControl"> </mat-select>
          <mat-error
            *ngIf="addFileForm.controls.researchControl.hasError('required')"
            >Research name is required!</mat-error
          >
        </mat-form-field>
        <mat-form-field appearance="fill" *ngIf="isMaterial">
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
            *ngIf="addFileForm.controls.materialControl.hasError('required')"
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
          *ngIf="addFileForm.controls.additionalControl.hasError('required')"
          >Additional file is required!</mat-error
        >
        <button mat-raised-button (click)="onSubmit()">Add ebsd</button>
      </form>
    </div>
  `,
  styleUrls: ['./add-file.component.scss'],
})
export class AddFileComponent implements OnInit {
  ResearchType = ResearchType;
  addFileForm = new FormGroup({
    researchControl: new FormControl('', [Validators.required]),
    destinationControl: new FormControl('', [Validators.required]),
    additionalControl: new FormControl('', [Validators.required]),
    materialControl: new FormControl('', [Validators.required]),
  });
  private selectedFile: File = null;
  typesOfDestination: string[] = ['Material', 'Research'];
  typesOfResearch: string[] = ['Tensile', 'Compression'];
  isDestinationResearch = false;
  isMaterial = false;
  isResearchPicked = false;
  constructor(public manageFacade: ManageFacade) {}

  ngOnInit(): void {}
  onSubmit(): void {}
  changeOption(event): void {
    if (event.value === 'Research') {
      this.isDestinationResearch = true;
      this.isMaterial = false;
    } else {
      this.isDestinationResearch = false;
      this.isMaterial = true;
    }
  }
  changeTypeOfResearch(event): void{
    this.isResearchPicked = true;
  }
  previewImage(event): void {
    this.selectedFile = event.target.files[0];
  }
}
