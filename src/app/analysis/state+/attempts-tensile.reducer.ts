import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AttemptRecord } from './analysis.model';
import { AnalysisActions } from './analysis.actions';

export const ATTEMPTS_TENSILE_FEATURE_KEY = 'attempts_tensile';

export const adapter: EntityAdapter<AttemptRecord> = createEntityAdapter<AttemptRecord>(
  {
    selectId: (attemptRecord: AttemptRecord) => attemptRecord.testId,
  }
);

export interface AttemptsTensileState extends EntityState<AttemptRecord> {}

export const attemptsTensileSelectors = {
  ...adapter.getSelectors(),
};

export const attemptsInitialTensileState: AttemptsTensileState = adapter.getInitialState();

const reducer = createReducer(
  attemptsInitialTensileState,
  on(
    AnalysisActions.attemptsTensileRecordReceived,
    (state: AttemptsTensileState, { record }) => adapter.upsertOne(record, state)
  )
);

export function attemptsTensileReducer(
  state: AttemptsTensileState | undefined,
  action: Action
): AttemptsTensileState {
  return reducer(state, action);
}
