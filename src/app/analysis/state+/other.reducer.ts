import { Action, createReducer, on } from '@ngrx/store';
import { ResearchType } from 'src/app/manage/+state/manage.model';
import { AnalysisActions } from './analysis.actions';
import { ResultsForAnalyse, Texture } from './analysis.model';

export const OTHER_FEATURE_KEY = 'other';

export interface OtherState {
  textures: Texture[];
  resultsForAnalyse: ResultsForAnalyse[];
  comparisionsCount: number;
  researchType: ResearchType;
}

export const otherSelectors = {
  comparisionCount: (state: OtherState) => state.comparisionsCount,
  researchType: (state: OtherState) => state.researchType
};

export const initialState: OtherState = {
  textures: [],
  resultsForAnalyse: [],
  comparisionsCount: 1,
  researchType: null,
};

const reducer = createReducer(
  initialState,
  on(AnalysisActions.texturesReceived, (state: OtherState, { textures }) => {
    return {
      ...state,
      textures,
    };
  }),
  on(AnalysisActions.addComparisionForm, (state: OtherState) => {
    return {
      ...state,
      comparisionsCount: state.comparisionsCount + 1,
    };
  }),
  on(AnalysisActions.removeComparisionForm, (state: OtherState) => {
    return {
      ...state,
      comparisionsCount: state.comparisionsCount - 1,
    };
  }),
  on(
    AnalysisActions.resultsForAnalyzeReceived,
    (state: OtherState, { resultsForAnalyse }) => {
      return {
        ...state,
        resultsForAnalyse,
      };
    }
  ),
  on(AnalysisActions.researchTypeChanged, (state: OtherState, { researchType }) => {
    return {
      ...state,
      researchType
    };
  }),
  on(AnalysisActions.clearResultsPage, (state: OtherState) => {
    return {
      ...state,
      resultsForAnalyse: []
    };
  }),
);

export function otherReducer(
  state: OtherState | undefined,
  action: Action
): OtherState {
  return reducer(state, action);
}
