import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AnalysisActions } from '../state+/analysis.actions';
import { AnalysisFacade } from '../state+/analysis.facade';

@Component({
  selector: 'app-analysis-results-page',
  template: `
    <div class="container">
      <app-analysis-results
        class="result-analysis"
        *ngFor="let analyse of analyisFacade.resultsForAnalyse$ | async" [analyse]='analyse'
      ></app-analysis-results>
    </div>
    <div class="bottom-panel">
      <button mat-raised-button (click)="onClear()">Clear results</button>
    </div>
  `,
  styleUrls: ['./analysis-results-page.component.scss'],
})
export class AnalysisResultsPageComponent implements OnInit {
  constructor(
    public analyisFacade: AnalysisFacade,
    private store: Store<any>
  ) {}

  ngOnInit(): void {}
  onClear(): void {
    this.store.dispatch(AnalysisActions.clearResultsPage());
  }
}
