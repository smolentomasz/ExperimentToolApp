import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-research',
  template: `
    <div class="addResearch-panel">
      <mat-form-field appearance="fill">
        <mat-label>Type of research</mat-label>
        <mat-select (selectionChange)="changeOption($event)">
          <mat-option
            *ngFor="let research of typesOfResearch"
            [value]="research"
          >
            {{ research }}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <form
        class="addTensile-form"
        [formGroup]="addTensileForm"
        *ngIf="tensileCheck"
      >
        <mat-form-field class="title-section">
          <mat-label>Test title</mat-label>
          <input matInput formControlName="nameControl" />
        </mat-form-field>
        <mat-form-field class="description-section">
          <mat-label>Description</mat-label>
          <textarea
            matInput
            cdkTextareaAutosize
            #autosize="cdkTextareaAutosize"
            cdkAutosizeMinRows="1"
            cdkAutosizeMaxRows="10"
            formControlName="additionalControl"
          ></textarea>
        </mat-form-field>
        <mat-form-field class="company-section">
          <mat-label>Company</mat-label>
          <input matInput formControlName="nameControl" />
        </mat-form-field>
        <mat-form-field class="standard-section">
          <mat-label>Test standard</mat-label>
          <input matInput formControlName="nameControl" />
        </mat-form-field>
        <mat-form-field class="machine-section">
          <mat-label>Machine info</mat-label>
          <input matInput formControlName="nameControl" />
        </mat-form-field>
        <button mat-raised-button (click)="onSubmit()">Add test</button>
      </form>
      <form
        class="addCompression-form"
        [formGroup]="addCompressionForm"
        *ngIf="compressionCheck"
      >
      <mat-form-field class="title-section">
          <mat-label>Test title</mat-label>
          <input matInput formControlName="nameControl" />
        </mat-form-field>
        <mat-form-field class="description-section">
          <mat-label>Description</mat-label>
          <textarea
            matInput
            cdkTextareaAutosize
            #autosize="cdkTextareaAutosize"
            cdkAutosizeMinRows="1"
            cdkAutosizeMaxRows="10"
            formControlName="additionalControl"
          ></textarea>
        </mat-form-field>
        <mat-form-field class="company-section">
          <mat-label>Company</mat-label>
          <input matInput formControlName="nameControl" />
        </mat-form-field>
        <mat-form-field class="standard-section">
          <mat-label>Test standard</mat-label>
          <input matInput formControlName="nameControl" />
        </mat-form-field>
        <mat-form-field class="machine-section">
          <mat-label>Machine info</mat-label>
          <input matInput formControlName="nameControl" />
        </mat-form-field>
        <mat-form-field class="machine-section">
          <mat-label>Initial force</mat-label>
          <input matInput type='number' formControlName="nameControl" />
        </mat-form-field>
        <mat-form-field class="machine-section">
          <mat-label>Young Module speed</mat-label>
          <input matInput type='number' formControlName="nameControl" />
        </mat-form-field>
        <mat-form-field class="machine-section">
          <mat-label>Test speed</mat-label>
          <input matInput type='number' formControlName="nameControl" />
        </mat-form-field>
        <button mat-raised-button (click)="onSubmit()">Add research</button>
      </form>
    </div>
  `,
  styleUrls: ['./add-research.component.scss'],
})
export class AddResearchComponent implements OnInit {
  typesOfResearch: string[] = ['Tensile', 'Compression'];
  compressionCheck = false;
  tensileCheck = false;
  addTensileForm = new FormGroup({
    nameControl: new FormControl('', [Validators.required]),
    additionalControl: new FormControl('', [Validators.required]),
    chemicalControl: new FormControl('', [Validators.required]),
  });
  addCompressionForm = new FormGroup({
    nameControl: new FormControl('', [Validators.required]),
    additionalControl: new FormControl('', [Validators.required]),
    chemicalControl: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {}

  changeOption(event): void {
    if (event.value === 'Compression') {
      this.compressionCheck = true;
      this.tensileCheck = false;
    } else {
      this.compressionCheck = false;
      this.tensileCheck = true;
    }
  }
}
