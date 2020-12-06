import { ActionReducerMap } from '@ngrx/store';
import {
  otherReducer,
  OtherState as SubordinateAnalysisState,
  OTHER_FEATURE_KEY,
} from './other.reducer';
import {
  attemptsTensileReducer,
  AttemptsTensileState,
  ATTEMPTS_TENSILE_FEATURE_KEY,
} from './attempts-tensile.reducer';
import {
  attemptsCompressionReducer,
  AttemptsCompressionState,
  ATTEMPTS_COMPRESSION_FEATURE_KEY,
} from './attempts-compression.reducer';

export const ANALYSIS_FEATURE_KEY = 'analysis';

export interface AnalysisState {
  [OTHER_FEATURE_KEY]: SubordinateAnalysisState;
  [ATTEMPTS_TENSILE_FEATURE_KEY]: AttemptsTensileState;
  [ATTEMPTS_COMPRESSION_FEATURE_KEY]: AttemptsCompressionState;
}

export const analysisReducers: ActionReducerMap<AnalysisState> = {
  [OTHER_FEATURE_KEY]: otherReducer,
  [ATTEMPTS_TENSILE_FEATURE_KEY]: attemptsTensileReducer,
  [ATTEMPTS_COMPRESSION_FEATURE_KEY]: attemptsCompressionReducer,
};
