import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AttemptRecord } from './analysis.model';
import { AnalysisState as SubordinateAnalysisState } from './analysis.reducer';
import { AnalysisState, ANALYSIS_FEATURE_KEY } from './analysis.reducers';
import { attemptsSelectors } from './attempts.reducer';

const selectAnalysisState = createFeatureSelector<AnalysisState>(
  ANALYSIS_FEATURE_KEY
);

const selectSubordinateAnalysisState = createSelector(
  selectAnalysisState,
  (state: AnalysisState) => state.other
);

const selectTextures = createSelector(
  selectSubordinateAnalysisState,
  (state: SubordinateAnalysisState) => state.textures
);

const selectComparisionCount = createSelector(
  selectSubordinateAnalysisState,
  (state: SubordinateAnalysisState) => state.comparisionsCount
);

const selectAttemptsState = createSelector(
  selectAnalysisState,
  (state: AnalysisState) => state.attempts
);
const selectAttemptsEntities = createSelector(
  selectAttemptsState,
  attemptsSelectors.selectEntities
);
const selectAttemptsByTestId = ({ testId }: { testId: number }) =>
  createSelector(
    selectAttemptsEntities,
    (entities: Dictionary<AttemptRecord>) =>
      testId && entities[testId] ? entities[testId].attempts : []
  );
export const AnalysisSelectors = {
  selectTextures,
  selectComparisionCount,
  selectAttemptsByTestId
};
