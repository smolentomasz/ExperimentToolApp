import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { head } from 'lodash';
import { AttemptRecord } from './analysis.model';
import { AnalysisActions } from './analysis.actions';

export const ATTEMPTS_FEATURE_KEY = 'attempts';

export const adapter: EntityAdapter<AttemptRecord> = createEntityAdapter<AttemptRecord>(
  {
    selectId: (attemptRecord: AttemptRecord) => attemptRecord.testId,
  }
);

export interface AttemptsState extends EntityState<AttemptRecord> {}

export const attemptsSelectors = {
  ...adapter.getSelectors(),
};

export const attemptsInitialState: AttemptsState = adapter.getInitialState();

const reducer = createReducer(
  attemptsInitialState,
  on(
    AnalysisActions.attemptsRecordReceived,
    (state: AttemptsState, { record }) => adapter.upsertOne(record, state)
  )
);

export function attemptsReducer(
  state: AttemptsState | undefined,
  action: Action
): AttemptsState {
  return reducer(state, action);
}
