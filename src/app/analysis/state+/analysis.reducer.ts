import { Action, createReducer, on } from '@ngrx/store';
import { AnalysisActions } from './analysis.actions';
import { Texture } from './analysis.model';

export const analysisFeatureKey = 'analysis';

export interface AnalysisState {
  textures: Texture[];
}

export const initialState: AnalysisState = {
    textures: []
};

const reducer = createReducer(
    initialState,
    on(AnalysisActions.texturesReceived, (state: AnalysisState, { textures }) => {
        return {
          ...state,
          textures,
        };
      }),
)

export function analysisReducer(
    state: AnalysisState | undefined,
    action: Action
  ): AnalysisState {
    return reducer(state, action);
  }