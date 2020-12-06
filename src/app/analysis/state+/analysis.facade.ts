import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ResearchType } from 'src/app/manage/+state/manage.model';
import { ResultsForAnalyse, Texture } from './analysis.model';
import { AnalysisSelectors } from './analysis.selectors';

@Injectable({
  providedIn: 'root',
})
export class AnalysisFacade {
  constructor(private store: Store<any>) {}
  textures$: Observable<Texture[]> = this.store.select(
    AnalysisSelectors.selectTextures
  );
  comparisionCount$: Observable<number> = this.store.select(
    AnalysisSelectors.selectComparisionCount
  );
  researchType$: Observable<ResearchType> = this.store.select(
    AnalysisSelectors.selectResearchType
  );
  resultsForAnalyse$: Observable<ResultsForAnalyse[]> = this.store.select(
    AnalysisSelectors.selectResultsForAnalyse
  )
  getAttemptsByTestId(testId: number, researchType: ResearchType): Observable<number[]> {
    return this.store.select(
      AnalysisSelectors.selectAttemptsByTestId({testId}, {researchType})
    );
  }
}
