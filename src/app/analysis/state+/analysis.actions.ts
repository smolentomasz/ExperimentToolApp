import { createAction, props } from '@ngrx/store';
import { ResearchType } from 'src/app/manage/+state/manage.model';
import { AttemptRecord, RecordRequest, ResultsForAnalyse, Texture } from './analysis.model';

const texturesReceived = createAction(
  '[Analysis] Textures received',
  props<{ textures: Texture[] }>()
);

const researchTypeChanged = createAction(
  '[Analysis] Research type changed',
  props<{ researchType: ResearchType }>()
);

const addComparisionForm = createAction('[Analysis] Add comparision form');

const removeComparisionForm = createAction(
  '[Analysis] Remove comparision form'
);

const researchNameTensileChanged = createAction(
  '[Analysis] Research name tensile changed',
  props<{ testId: number }>()
);
const researchNameCompressionChanged = createAction(
  '[Analysis] Research name compression changed',
  props<{ testId: number}>()
);

const attemptsTensileRecordReceived = createAction(
  '[Analysis] Attempts tensile record received',
  props<{ record: AttemptRecord }>()
);
const attemptsCompressionRecordReceived = createAction(
  '[Analysis] Attempts compression record received',
  props<{ record: AttemptRecord }>()
);
const getResultsForAnalyse = createAction(
  '[Analysis] Get results for analyse',
  props<{ recordList: FormData; researchType: ResearchType }>()
);
const resultsForAnalyzeReceived = createAction(
  '[Analysis] Results for analyze received',
  props<{ resultsForAnalyse: ResultsForAnalyse[] }>()
);
const clearResultsPage = createAction(
  '[Analysis] Clear results page'
)

export const AnalysisActions = {
  texturesReceived,
  researchTypeChanged,
  addComparisionForm,
  removeComparisionForm,
  researchNameTensileChanged,
  researchNameCompressionChanged,
  attemptsTensileRecordReceived,
  getResultsForAnalyse,
  resultsForAnalyzeReceived,
  attemptsCompressionRecordReceived,
  clearResultsPage
};
