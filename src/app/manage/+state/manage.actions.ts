import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/header/+state/header.model';
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
const addMaterialError = createAction('[Manage] Add material error');
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
const addTensileTestError = createAction('[Manage] Add tensile test error');
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
const addCompressionTestError = createAction('[Manage] Add compression test error');
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
const addTensileTestResultError = createAction('[Manage] Add tensile test results error');
const addTensileTestResultSuccess = createAction(
  '[Manage] Add tensile test result success',
  props<{ responseMessage: ResponseMessage }>()
);
const addCompressionTestResultButtonClicked = createAction(
  '[Manage] Add compression test result button clicked',
  props<{ compressionResultForm: FormData }>()
);
const addCompressionTestResultError = createAction('[Manage] Add compression test results error');
const addCompressionTestResultSuccess = createAction(
  '[Manage] Add compression test result success',
  props<{ responseMessage: ResponseMessage }>()
);
const addAdditionalFileButtonClicked = createAction(
  '[Manage] Add additional file button clicked',
  props<{ additionalFileForm: FormData }>()
);
const addAdditionalFileError = createAction('[Manage] Add additional file error');
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
const addTextureButtonError = createAction('[Manage] Add texture error');
const addTextureSuccess = createAction(
  '[Manage] Add texture success',
  props<{ responseMessage: ResponseMessage }>()
);
const downloadFileButtonClicked = createAction(
  '[Manage] Download file button clicked',
  props<{ fileId: number }>()
);
const downloadFileError = createAction('[Manage] Add texture error');
const fileReceivedFromBackend = createAction(
  '[Header] File received from backend',
  props<{ file: DownloadFileModel }>()
);
const tokenExpired = createAction(
  '[Header] Token expired',
  props<{ user: User }>()
);
export const ManageActions = {
  addMaterialButtonClicked,
  addMaterialError,
  addMaterialSuccess,
  materialsReceived,
  addTensileTestButtonClicked,
  addTensileTestError,
  addTensileTestSuccess,
  tensileTestsReceived,
  addCompressionTestButtonClicked,
  addCompressionTestError,
  addCompressionTestSuccess,
  compressionTestsReceived,
  addTensileTestResultButtonClicked,
  addTensileTestResultError,
  addTensileTestResultSuccess,
  addCompressionTestResultButtonClicked,
  addCompressionTestResultError,
  addCompressionTestResultSuccess,
  addAdditionalFileButtonClicked,
  addAdditionalFileError,
  addAdditionalFileSuccess,
  additionalFilesReceived,
  addTextureButtonClicked,
  addTextureButtonError,
  addTextureSuccess,
  downloadFileButtonClicked,
  downloadFileError,
  fileReceivedFromBackend,
  tokenExpired
};
