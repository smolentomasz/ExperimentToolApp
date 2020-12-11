import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AnalysisFacade } from '../state+/analysis.facade';
import { MatPaginator } from '@angular/material/paginator';
import { ResultsForAnalyse } from '../state+/analysis.model';

@Component({
  selector: 'app-analysis-results',
  template: `
    <div class="analysis-model">
    <mat-label class="information-header">Test parameters</mat-label>
      <div class="test-summary">
        <mat-card
          class="material-card"
          *ngIf="(analysisFacade.researchType$ | async) === 'Tensile'"
        >
          <mat-card-content class="card-content">
            <mat-label class="title-label"> Test title </mat-label>
            {{ analyse.testResult[0].tensileTest.title }}
            <mat-label class="title-label"> Test description </mat-label>
            {{ analyse.testResult[0].tensileTest.description }}
            <mat-label class="title-label"> Company </mat-label>
            {{ analyse.testResult[0].tensileTest.company }}
            <mat-label class="title-label"> Test standard </mat-label>
            {{ analyse.testResult[0].tensileTest.testStandard }}
            <mat-label class="title-label"> Machine info </mat-label>
            {{ analyse.testResult[0].tensileTest.machineInfo }}
            <mat-label class="title-label"> Initial force </mat-label>
            {{ analyse.testResult[0].tensileTest.initialForce }}
            <mat-label class="title-label"> Young module speed </mat-label>
            {{ analyse.testResult[0].tensileTest.youngModuleSpeed }}
            <mat-label class="title-label"> Test speed </mat-label>
            {{ analyse.testResult[0].tensileTest.testSpeed }}
            <mat-label class="information-header">Probe parameters</mat-label>
            <div class="probe-informations">
              <div class="info-record">
                <mat-label class="title-label"> L<sub>0</sub>: </mat-label
                ><mat-label>{{ analyse.testResult[0].l0 }} mm</mat-label>
              </div>

              <div class="info-record">
                <mat-label class="title-label"> L<sub>u</sub>: </mat-label
                ><mat-label> {{ analyse.testResult[0].lu }} mm</mat-label>
              </div>

              <div class="info-record">
                <mat-label class="title-label"> L<sub>c</sub>: </mat-label
                ><mat-label>{{ analyse.testResult[0].lc }} mm</mat-label>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
        <mat-card
          class="material-card"
          *ngIf="(analysisFacade.researchType$ | async) === 'Compression'"
        >
          <mat-card-content class="card-content">
            <mat-label class="title-label"> Test title </mat-label>
            {{ analyse.testResult[1].compressionTest.title }}
            <mat-label class="title-label"> Test description </mat-label>
            {{ analyse.testResult[1].compressionTest.description }}
            <mat-label class="title-label"> Test author </mat-label>
            {{ analyse.testResult[1].compressionTest.testAuthor }}
            <mat-label class="title-label"> Machine info </mat-label>
            {{ analyse.testResult[1].compressionTest.machineInfo }}
            <mat-label class="title-label"> Initial force </mat-label>
            {{ analyse.testResult[1].compressionTest.initialForce }}
            <mat-label class="title-label">
              Compression module speed
            </mat-label>
            {{ analyse.testResult[1].compressionTest.compressionModuleSpeed }}
            <mat-label class="title-label"> Yeld point speed </mat-label>
            {{ analyse.testResult[1].compressionTest.yeldPointSpeed }}
            <mat-label class="title-label"> Test speed </mat-label>
            {{ analyse.testResult[1].compressionTest.testSpeed }}
            <mat-label class="information-header">Probe parameters</mat-label>
            <div class="probe-informations">
              <div class="info-record">
                <mat-label class="title-label"> d<sub>0</sub>: </mat-label
                ><mat-label> {{ analyse.testResult[1].d0 }} mm</mat-label>
              </div>
              <div class="info-record">
                <mat-label class="title-label"> h<sub>0</sub>: </mat-label
                ><mat-label> {{ analyse.testResult[1].h0 }} mm</mat-label>
              </div>

              <div class="info-record">
                <mat-label class="title-label"> S<sub>0</sub>: </mat-label
                ><mat-label>
                  {{ analyse.testResult[1].s0 }} mm<sup>2</sup></mat-label
                >
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
      <mat-label class="information-header">Series chart</mat-label>
      <app-analysis-chart [analyse]="analyse" [testType]="(analysisFacade.researchType$ | async)"></app-analysis-chart>
      <mat-label class="information-header">Results</mat-label>
      <app-analysis-tensile-table
        [analyse]="analyse"
        *ngIf="(analysisFacade.researchType$ | async) === 'Tensile'"
      ></app-analysis-tensile-table>
      <app-analysis-compression-table
        [analyse]="analyse"
        *ngIf="(analysisFacade.researchType$ | async) === 'Compression'"
      ></app-analysis-compression-table>
    </div>
  `,
  styleUrls: ['./analysis-results.component.scss'],
})
export class AnalysisResultsComponent implements OnInit {
  @Input() analyse: ResultsForAnalyse;
  constructor(public analysisFacade: AnalysisFacade) {}

  ngOnInit(): void {}
}
