import { Component, Input, OnInit } from '@angular/core';
import { ResearchType } from 'src/app/manage/+state/manage.model';
import { Multi, ResultsForAnalyse, Series } from '../state+/analysis.model';

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
  multi: Multi[] = [];
  chartRecords: Series[] = [];
  view: any[] = [700, 500];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Elongation in %';
  yAxisLabel: string = 'Standard force in N';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor() {}

  ngOnInit(): void {}
}
