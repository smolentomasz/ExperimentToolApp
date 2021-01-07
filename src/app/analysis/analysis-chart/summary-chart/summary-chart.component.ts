import { Component, Input, OnInit } from '@angular/core';
import { ResearchType } from 'src/app/manage/+state/manage.model';
import { AnalysisFacade } from '../../state+/analysis.facade';
import { Multi, Series } from '../../state+/analysis.model';

@Component({
  selector: 'app-summary-chart',
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
      [results]="chartData"
    >
    </ngx-charts-line-chart>
  `,
  styleUrls: ['./summary-chart.component.scss'],
})
export class SummaryChartComponent implements OnInit {
  researchType = ResearchType;
  @Input() testType: ResearchType;

  chartData: Multi[] = [];
  chartRecords: Series[] = [];
  view: any[] = [700, 500];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string;
  yAxisLabel: string;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  constructor(public analysisFacade: AnalysisFacade) {}

  ngOnInit(): void {
    this.analysisFacade.resultsForAnalyse$.subscribe((resultsTab) => {
      resultsTab.forEach((elementResult) => {
        elementResult.testResult.forEach(
          (element) => {
            if (this.testType === this.researchType.COMPRESSION) {
              this.chartRecords.push({
                name: (element.relativeReduction / element.d0) * 100,
                value: element.standardForce,
              });
            } else {
              this.chartRecords.push({
                name: (element.elongation / element.l0) * 100,
                value: element.standardForce,
              });
            }
          },
          this.chartData.push({
            name: 'Attempt: ' + elementResult.attemptNumber,
            series: this.chartRecords,
          })
        );
        this.chartRecords = [];
      });
    });
    if(this.testType === this.researchType.COMPRESSION){
      this.xAxisLabel = 'Relative reduction [%]';
      this.yAxisLabel = 'Standard force [N]';
    }
    else{
      this.xAxisLabel = 'Elongation [%]';
      this.yAxisLabel = 'Standard force [N]';
    }
  }
}
