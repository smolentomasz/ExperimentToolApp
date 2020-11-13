import { createAction, props } from '@ngrx/store';
import {
  CompressionTest,
  Material,
  ResponseMessage,
  TensileTest,
} from './manage.model';

const addMaterialButtonClicked = createAction(
  '[Manage] Add material button clicked',
  props<{ materialForm: FormData }>()
);
const addMaterialSuccess = createAction(
  '[Manage] Add material succes',
  props<{ responseMessage: ResponseMessage }>()
);
const materialsReceived = createAction(
  '[Manage] Materials received',
  props<{ materials: Material[] }>()
);
const addTensileTestButtonClicked = createAction(
  '[Manage] Add tensile test button clicked',
  props<{ newTensileTest: TensileTest }>()
);
const addTensileTestSuccess = createAction(
  '[Manage] Add tensile test succes',
  props<{ responseMessage: ResponseMessage }>()
);
const tensileTestsReceived = createAction(
  '[Manage] Tensile tests received',
  props<{ tensileTests: TensileTest[] }>()
);
const addCompressionTestButtonClicked = createAction(
  '[Manage] Add compression test button clicked',
  props<{ newCompressionTest: CompressionTest }>()
);
const addCompressionTestSuccess = createAction(
  '[Manage] Add compression test succes',
  props<{ responseMessage: ResponseMessage }>()
);
const compressionTestsReceived = createAction(
  '[Manage] Compression tests received',
  props<{ compressionTests: CompressionTest[] }>()
);
export const ManageActions = {
  addMaterialButtonClicked,
  addMaterialSuccess,
  materialsReceived,
  addTensileTestButtonClicked,
  addTensileTestSuccess,
  tensileTestsReceived,
  addCompressionTestButtonClicked,
  addCompressionTestSuccess,
  compressionTestsReceived,
};
