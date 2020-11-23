import { Component, OnInit } from '@angular/core';
import { AnalysisFacade } from '../state+/analysis.facade';

@Component({
  selector: 'app-analysis-page',
  template: `
    <app-analysis-form-page [comparisionCount]="analysisFacade.comparisionCount$ | async"></app-analysis-form-page>
  `,
  styleUrls: ['./data-analysis-page.component.scss']
})
export class DataAnalysisPageComponent implements OnInit {

  constructor(public analysisFacade: AnalysisFacade) { }

  ngOnInit(): void {
  }

}
