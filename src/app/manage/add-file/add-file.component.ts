import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ManageActions } from '../+state/manage.actions';
import { ManageFacade } from '../+state/manage.facade';
import {
  CompressionTest,
  ResearchType,
  TensileTest,
} from '../+state/manage.model';

@Component({
  selector: 'app-add-file',
  template: `
    <div class="addFile-panel">
      <form class="addFile-form">
        <mat-form-field appearance="fill">
          <mat-label>Select destination</mat-label>
          <mat-select (selectionChange)="changeOption($event)">
            <mat-option *ngFor="let dest of typesOfDestination" [value]="dest">
              {{ dest }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </form>
      <app-add-file-test *ngIf="isResearch"></app-add-file-test>
      <app-add-file-material *ngIf="isMaterial"></app-add-file-material>
      <table
        mat-table
        [dataSource]="manageFacade.additionalFiles$ | async"
        class="mat-elevation-z8"
      >
        <ng-container matColumnDef="number">
          <th mat-header-cell *matHeaderCellDef>No.</th>
          <td mat-cell *matCellDef="let element">{{ element.id }}</td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element">{{ element.name }}</td>
        </ng-container>

        <ng-container matColumnDef="reference">
          <th mat-header-cell *matHeaderCellDef>Reference</th>
          <td mat-cell *matCellDef="let element">
            {{ element.referenceType }}
          </td>
        </ng-container>

        <ng-container matColumnDef="referenceName">
          <th mat-header-cell *matHeaderCellDef>Reference name</th>
          <td mat-cell *matCellDef="let element">
            {{ element.referenceTypeName }}
          </td>
        </ng-container>
        <ng-container matColumnDef="download">
          <th mat-header-cell *matHeaderCellDef>Download</th>
          <td mat-cell *matCellDef="let element">
            <button mat-raised-button (click)="onDownload(element)">Download</button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="this.displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: this.displayedColumns"></tr>
      </table>
    </div>
  `,
  styleUrls: ['./add-file.component.scss'],
})
export class AddFileComponent implements OnInit {
  ResearchType = ResearchType;
  researches$: Observable<TensileTest[] | CompressionTest[]>;

  typesOfDestination: string[] = ['Material', 'Research'];
  displayedColumns: string[] = [
    'number', 'name', 'reference', 'referenceName',  'download',
  ];
  isResearch = false;
  isMaterial = false;
  referenceType: string;
  referenceTypeName: string;
  constructor(public manageFacade: ManageFacade, private store: Store<any>) {}

  ngOnInit(): void {}

  changeOption(event): void {
    if (event.value === 'Research') {
      this.isResearch = true;
      this.isMaterial = false;
    } else {
      this.isResearch = false;
      this.isMaterial = true;
    }
  }
  onDownload(element): void {
    console.log(element.id);
  }
}
