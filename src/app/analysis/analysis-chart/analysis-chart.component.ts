import { Component, Input, OnInit } from '@angular/core';
import { ResearchType } from 'src/app/manage/+state/manage.model';
import { ResultsForAnalyse } from '../state+/analysis.model';

@Component({
  selector: 'app-analysis-chart',
  template: `
    <app-tensile-chart [analyse]='analyse' *ngIf="testType === researchType.TENSILE"></app-tensile-chart>
    <app-compression-chart [analyse]='analyse' *ngIf="testType === researchType.COMPRESSION"></app-compression-chart>
  `,
  styleUrls: ['./analysis-chart.component.scss'],
})
export class AnalysisChartComponent implements OnInit {
  researchType = ResearchType;
  @Input() analyse: ResultsForAnalyse;
  @Input() testType: ResearchType;
 
  constructor() {}

  ngOnInit(): void {}
}
