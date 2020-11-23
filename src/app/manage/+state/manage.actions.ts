import { createAction, props } from '@ngrx/store';
import {
  AdditionalFile,
  CompressionTest,
  DownloadFileModel,
  Material,
  ResponseMessage,
  TensileTest,
} from './manage.model';

const addMaterialButtonClicked = createAction(
  '[Manage] Add material button clicked',
  props<{ materialForm: FormData }>()
);
const addMaterialSuccess = createAction(
  '[Manage] Add material success',
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
  '[Manage] Add tensile test success',
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
  '[Manage] Add compression test success',
  props<{ responseMessage: ResponseMessage }>()
);
const compressionTestsReceived = createAction(
  '[Manage] Compression tests received',
  props<{ compressionTests: CompressionTest[] }>()
);
const addTensileTestResultButtonClicked = createAction(
  '[Manage] Add tensile test result button clicked',
  props<{ tensileResultForm: FormData }>()
);
const addTensileTestResultSuccess = createAction(
  '[Manage] Add tensile test result success',
  props<{ responseMessage: ResponseMessage }>()
);
const addCompressionTestResultButtonClicked = createAction(
  '[Manage] Add compression test result button clicked',
  props<{ compressionResultForm: FormData }>()
);
const addCompressionTestResultSuccess = createAction(
  '[Manage] Add compression test result success',
  props<{ responseMessage: ResponseMessage }>()
);
const addAdditionalFileButtonClicked = createAction(
  '[Manage] Add additional file button clicked',
  props<{ additionalFileForm: FormData }>()
);
const addAdditionalFileSuccess = createAction(
  '[Manage] Add additional file success',
  props<{ responseMessage: ResponseMessage }>()
);
const additionalFilesReceived = createAction(
  '[Manage] Additional files received',
  props<{ additionalFiles: AdditionalFile[] }>()
);
const addTextureButtonClicked = createAction(
  '[Manage] Add texture button clicked',
  props<{ textureForm: FormData }>()
);
const addTextureSuccess = createAction(
  '[Manage] Add texture success',
  props<{ responseMessage: ResponseMessage }>()
);
const downloadFileButtonClicked = createAction(
  '[Manage] Download file button clicked',
  props<{ fileId: number }>()
);
const fileReceivedFromBackend = createAction(
  '[Header] File received from backend',
  props<{ file: DownloadFileModel }>()
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
  addTensileTestResultButtonClicked,
  addTensileTestResultSuccess,
  addCompressionTestResultButtonClicked,
  addCompressionTestResultSuccess,
  addAdditionalFileButtonClicked,
  addAdditionalFileSuccess,
  additionalFilesReceived,
  addTextureButtonClicked,
  addTextureSuccess,
  downloadFileButtonClicked,
  fileReceivedFromBackend
};
