import { createAction, props } from '@ngrx/store';
import { Texture } from './analysis.model';

const texturesReceived = createAction(
  '[Manage] Textures received',
  props<{ textures: Texture[] }>()
);

export const AnalysisActions = {
  texturesReceived,
};
