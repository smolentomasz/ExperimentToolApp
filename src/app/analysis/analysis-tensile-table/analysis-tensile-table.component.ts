import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CompressionTestResult, ResultsForAnalyse, TensileTestResult } from '../state+/analysis.model';

@Component({
  selector: 'app-analysis-tensile-table',
  template: `
    <div class="mat-elevation-z8">
  <table mat-table [dataSource]="this.dataSource" class='results-table'>
    <ng-container matColumnDef="elongation">
      <th mat-header-cell *matHeaderCellDef> Elongation </th>
      <td mat-cell *matCellDef="let element"> {{element.elongation}} </td>
    </ng-container>
    <ng-container matColumnDef="standardForce">
      <th mat-header-cell *matHeaderCellDef> Standard force </th>
      <td mat-cell *matCellDef="let element"> {{element.standardForce}} </td>
    </ng-container>
    <ng-container matColumnDef="trueStress">
      <th mat-header-cell *matHeaderCellDef> True stress </th>
      <td mat-cell *matCellDef="let element"> {{element.trueStress}} </td>
    </ng-container>
    <ng-container matColumnDef="plasticElongation">
      <th mat-header-cell *matHeaderCellDef> Plastic elongation </th>
      <td mat-cell *matCellDef="let element"> {{element.plasticElongation}} </td>
    </ng-container>
    <ng-container matColumnDef="xCorrectElongation">
      <th mat-header-cell *matHeaderCellDef> Elongation (x-correct) </th>
      <td mat-cell *matCellDef="let element"> {{element.xCorrectElongation}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

  <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons [length]='1000'></mat-paginator>
</div>
  `,
  styleUrls: ['./analysis-tensile-table.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalysisTensileTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'elongation', 'standardForce', 'trueStress', 'plasticElongation', 'xCorrectElongation'
  ];
  @Input() analyse: ResultsForAnalyse;
  dataSource: MatTableDataSource<TensileTestResult | CompressionTestResult> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    setTimeout(() => {
      this.dataSource.data = this.analyse.testResult;
    }, 0);
  }
  constructor() { }

  ngOnInit(): void {
  }
}
