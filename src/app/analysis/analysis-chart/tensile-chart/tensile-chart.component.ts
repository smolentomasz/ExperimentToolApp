import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CompressionTestResult, Multi, ResultsForAnalyse, Series, TensileTestResult } from '../../state+/analysis.model';

@Component({
  selector: 'app-tensile-chart',
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
  styleUrls: ['./tensile-chart.component.scss']
})
export class TensileChartComponent implements OnInit {
  @Input() analyse: ResultsForAnalyse;
  multi: Multi[] = [];
  chartRecords: Series[] = [];
  view: any[] = [600, 400];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Elongation [%]';
  yAxisLabel: string = 'Standard force [N]';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  constructor() { }

  ngOnInit(): void {
    this.analyse.testResult.forEach((element) => {
      this.chartRecords.push({
        name: element.elongation / element.l0 * 100,
        value: element.standardForce
      });
    });
    this.multi.push({
      name: 'Att.: ' + this.analyse.attemptNumber,
      series: this.chartRecords
    });
  }

}
