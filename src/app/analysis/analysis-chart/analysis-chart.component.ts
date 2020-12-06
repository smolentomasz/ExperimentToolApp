import { Component, Input, OnInit } from '@angular/core';
import { Multi, ResultsForAnalyse, Series } from '../state+/analysis.model';

@Component({
  selector: 'app-analysis-chart',
  template: `
    <ngx-charts-line-chart
      [view]="view"
      [scheme]="colorScheme"
      [legend]="legend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxis]="xAxis"
      [yAxis]="yAxis"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [results]="multi"
    >
    </ngx-charts-line-chart>
  `,
  styleUrls: ['./analysis-chart.component.scss'],
})
export class AnalysisChartComponent implements OnInit {
  @Input() analyse: ResultsForAnalyse;
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

  constructor() {
  }

  ngOnInit(): void {
    this.analyse.testResult.forEach((element) => {
      this.chartRecords.push({
        name: element.elongation / 80 * 100,
        value: element.standardForce
      });
    });
    this.multi.push({
      name: 'Attempt: ' + this.analyse.attemptNumber,
      series: this.chartRecords
    });
    console.log(this.multi);
  }
}
