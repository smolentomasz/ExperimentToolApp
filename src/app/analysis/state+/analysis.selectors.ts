import { createFeatureSelector, createSelector } from '@ngrx/store';
import { analysisFeatureKey, AnalysisState } from './analysis.reducer';

const selectAnalysis = createFeatureSelector<AnalysisState>(analysisFeatureKey);

const selectAnalysisState = createSelector(
  selectAnalysis,
  (state: AnalysisState) => state
);

const selectTextures = createSelector(
  selectAnalysisState,
  (state: AnalysisState) => state.textures
);
export const AnalysisSelectors = {
  selectTextures,
};
