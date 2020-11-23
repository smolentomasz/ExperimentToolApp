import { ActionReducerMap } from '@ngrx/store';
import { analysisReducer, AnalysisState as SubordinateAnalysisState, OTHER_FEATURE_KEY} from './analysis.reducer';
import { attemptsReducer, AttemptsState, ATTEMPTS_FEATURE_KEY} from './attempts.reducer';


export const ANALYSIS_FEATURE_KEY = 'analysis';

export interface AnalysisState {
  [OTHER_FEATURE_KEY]: SubordinateAnalysisState;
  [ATTEMPTS_FEATURE_KEY]: AttemptsState;
}

export const analysisReducers: ActionReducerMap<AnalysisState> = {
  [OTHER_FEATURE_KEY]: analysisReducer,
  [ATTEMPTS_FEATURE_KEY]: attemptsReducer
};