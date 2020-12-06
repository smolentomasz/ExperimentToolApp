import { Component, OnInit } from '@angular/core';
import { AnalysisFacade } from '../state+/analysis.facade';

@Component({
  selector: 'app-analysis-page',
  template: `
    <app-analysis-form-page [comparisionCount]="analysisFacade.comparisionCount$ | async" *ngIf='!!!(analysisFacade.resultsForAnalyse$ | async).length'></app-analysis-form-page>
    <app-analysis-results-page *ngIf='!!(analysisFacade.resultsForAnalyse$ | async).length'></app-analysis-results-page>
  `,
  styleUrls: ['./data-analysis-page.component.scss']
})
export class DataAnalysisPageComponent implements OnInit {

  constructor(public analysisFacade: AnalysisFacade) { }

  ngOnInit(): void {
  }

}
