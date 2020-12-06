import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AttemptRecord } from './analysis.model';
import { OtherState as SubordinateAnalysisState } from './other.reducer';
import { AnalysisState, ANALYSIS_FEATURE_KEY } from './analysis.reducers';
import { attemptsTensileSelectors } from './attempts-tensile.reducer';
import { attemptsCompressionSelectors } from './attempts-compression.reducer';
import { ResearchType } from 'src/app/manage/+state/manage.model';

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

const selectResultsForAnalyse = createSelector(
 selectSubordinateAnalysisState,
 (state: SubordinateAnalysisState) => state.resultsForAnalyse
)

const selectResearchType = createSelector(
  selectSubordinateAnalysisState,
  (state: SubordinateAnalysisState) => state.researchType
);

const selectAttemptsTensileState = createSelector(
  selectAnalysisState,
  (state: AnalysisState) => state.attempts_tensile
);
const selectAttemptsCompressionState = createSelector(
  selectAnalysisState,
  (state: AnalysisState) => state.attempts_compression
);
const selectAttemptsTensileEntities = createSelector(
  selectAttemptsTensileState,
  attemptsTensileSelectors.selectEntities
);
const selectAttemptsCompressionEntities = createSelector(
  selectAttemptsCompressionState,
  attemptsCompressionSelectors.selectEntities
);
const selectAttemptsByTestId = (
  { testId }: { testId: number },
  { researchType }: { researchType: ResearchType }
) =>
  createSelector(
    selectAttemptsTensileEntities,
    selectAttemptsCompressionEntities,
    (
      entitiesTensile: Dictionary<AttemptRecord>,
      entitiesCompression: Dictionary<AttemptRecord>
    ) =>
      researchType === 'Tensile'
        ? testId && entitiesTensile[testId]
          ? entitiesTensile[testId].attempts
          : []
        : testId && entitiesCompression[testId]
        ? entitiesCompression[testId].attempts
        : []
  );
export const AnalysisSelectors = {
  selectTextures,
  selectComparisionCount,
  selectAttemptsByTestId,
  selectResearchType,
  selectResultsForAnalyse
};
