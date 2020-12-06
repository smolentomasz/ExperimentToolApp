import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AttemptRecord } from './analysis.model';
import { AnalysisActions } from './analysis.actions';

export const ATTEMPTS_COMPRESSION_FEATURE_KEY = 'attempts_compression';

export const adapter: EntityAdapter<AttemptRecord> = createEntityAdapter<AttemptRecord>(
  {
    selectId: (attemptRecord: AttemptRecord) => attemptRecord.testId,
  }
);

export interface AttemptsCompressionState extends EntityState<AttemptRecord> {}

export const attemptsCompressionSelectors = {
  ...adapter.getSelectors(),
};

export const attemptsInitialCompressionState: AttemptsCompressionState = adapter.getInitialState();

const reducer = createReducer(
    attemptsInitialCompressionState,
  on(
    AnalysisActions.attemptsCompressionRecordReceived,
    (state: AttemptsCompressionState, { record }) => adapter.upsertOne(record, state)
  )
);

export function attemptsCompressionReducer(
  state: AttemptsCompressionState | undefined,
  action: Action
): AttemptsCompressionState {
  return reducer(state, action);
}