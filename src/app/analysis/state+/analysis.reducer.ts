import { Action, createReducer, on } from '@ngrx/store';
import { AnalysisActions } from './analysis.actions';
import { Texture } from './analysis.model';

export const OTHER_FEATURE_KEY = 'other';

export interface AnalysisState {
  textures: Texture[];
  comparisionsCount: number;
}

export const analysisSelectors = {
  comparisionCount: (state: AnalysisState) => state.comparisionsCount,
};

export const initialState: AnalysisState = {
    textures: [],
    comparisionsCount: 1
};

const reducer = createReducer(
    initialState,
    on(AnalysisActions.texturesReceived, (state: AnalysisState, { textures }) => {
        return {
          ...state,
          textures,
        };
      }),
      on(AnalysisActions.addComparisionForm, (state: AnalysisState) => {
        return {
          ...state,
          comparisionsCount: state.comparisionsCount + 1
        };
      }),
      on(AnalysisActions.removeComparisionForm, (state: AnalysisState) => {
        return {
          ...state,
          comparisionsCount: state.comparisionsCount - 1
        };
      }),
)

export function analysisReducer(
    state: AnalysisState | undefined,
    action: Action
  ): AnalysisState {
    return reducer(state, action);
  }