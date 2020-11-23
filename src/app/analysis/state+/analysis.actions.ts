import { createAction, props } from '@ngrx/store';
import { AttemptRecord, Texture } from './analysis.model';

const texturesReceived = createAction(
  '[Analysis] Textures received',
  props<{ textures: Texture[] }>()
);

const addComparisionForm = createAction('[Analysis] Add comparision form');
const removeComparisionForm = createAction(
  '[Analysis] Remove comparision form'
);

const researchNameChanged = createAction(
  '[Analysis] Research name changed',
  props<{ testId: number }>()
);

const attemptsRecordReceived = createAction(
  '[Analysis] Attempts record received',
  props<{ record: AttemptRecord }>()
);

export const AnalysisActions = {
  texturesReceived,
  addComparisionForm,
  removeComparisionForm,
  researchNameChanged,
  attemptsRecordReceived
};
