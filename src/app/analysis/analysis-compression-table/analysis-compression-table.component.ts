import { AfterViewInit, Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  CompressionTestResult,
  ResultsForAnalyse, TensileTestResult
} from '../state+/analysis.model';

@Component({
  selector: 'app-analysis-compression-table',
  template: `
    <div class="mat-elevation-z8">
      <table mat-table [dataSource]="this.dataSource">
        <ng-container matColumnDef="relativeReduction">
          <th mat-header-cell *matHeaderCellDef>Relative reduction</th>
          <td mat-cell *matCellDef="let element">
            {{ element.relativeReduction }}
          </td>
        </ng-container>
        <ng-container matColumnDef="standardForce">
          <th mat-header-cell *matHeaderCellDef>Standard force</th>
          <td mat-cell *matCellDef="let element">
            {{ element.standardForce }}
          </td>
        </ng-container>
        <ng-container matColumnDef="plasticRelativeReduction">
          <th mat-header-cell *matHeaderCellDef>Plastic relative reduction</th>
          <td mat-cell *matCellDef="let element">
            {{ element.plasticRelativeReduction }}
          </td>
        </ng-container>
        <ng-container matColumnDef="xCorrectRelativeReduction">
          <th mat-header-cell *matHeaderCellDef>
            Relative reduction (x-correct)
          </th>
          <td mat-cell *matCellDef="let element">
            {{ element.xCorrectRelativeReduction }}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>

      <mat-paginator
        [pageSizeOptions]="[5, 10, 20]"
        [length]="analyse.testResult.length"
        showFirstLastButtons
      ></mat-paginator>
    </div>
  `,
  styleUrls: ['./analysis-compression-table.component.scss'],
})
export class AnalysisCompressionTableComponent
  implements OnInit, AfterViewInit {
    displayedColumns: string[] = [
      'plasticRelativeReduction',
      'relativeReduction',
      'standardForce',
      'xCorrectRelativeReduction',
    ];
  @Input() analyse: ResultsForAnalyse;
  dataSource: MatTableDataSource<TensileTestResult | CompressionTestResult> = new MatTableDataSource();
  pageEvent: PageEvent;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    setTimeout(() => {
      this.dataSource.data = this.analyse.testResult;
    }, 0);
  }
  constructor() {}

  ngOnInit(): void {
  }
}
