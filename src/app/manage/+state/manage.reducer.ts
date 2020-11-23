import { Action, createReducer, on} from '@ngrx/store';
import { ManageActions } from './manage.actions';
import { AdditionalFile, CompressionTest, DownloadFileModel, Material, TensileTest } from './manage.model';

export const manageFeatureKey = 'manage';

export interface ManageState {
  isMaterialAdding: boolean;
  isTextureAdding: boolean;
  isTensileTestAdding: boolean;
  isTensileResultAdding: boolean;
  isCompressionTestAdding: boolean;
  isCompressionResultAdding: boolean;
  isAdditionalFileAdding: boolean;
  isFileDownloading: boolean;
  file: DownloadFileModel;
  materials: Material[];
  tensileTests: TensileTest[];
  compressionTests: CompressionTest[];
  additionalFiles: AdditionalFile[];
}

export const initialState: ManageState = {
  isMaterialAdding: false,
  isTextureAdding: false,
  isTensileTestAdding: false,
  isTensileResultAdding: false,
  isCompressionTestAdding: false,
  isCompressionResultAdding: false,
  isAdditionalFileAdding: false,
  isFileDownloading: false,
  file: null,
  materials: [],
  tensileTests: [],
  compressionTests: [],
  additionalFiles: []
};

const reducer = createReducer(
  initialState,
  on(ManageActions.addMaterialButtonClicked, (state: ManageState) => {
    return {
      ...state,
      isMaterialAdding: true,
    };
  }),
  on(ManageActions.addMaterialSuccess, (state: ManageState) => {
    return {
      ...state,
      isMaterialAdding: false,
    };
  }),
  on(ManageActions.materialsReceived, (state: ManageState, { materials }) => {
    return {
      ...state,
      materials,
    };
  }),
  on(ManageActions.addTensileTestButtonClicked, (state: ManageState) => {
    return {
      ...state,
      isTensileTestAdding: true,
    };
  }),
  on(ManageActions.addTensileTestSuccess, (state: ManageState) => {
    return {
      ...state,
      isTensileTestAdding: false,
    };
  }),
  on(
    ManageActions.tensileTestsReceived,
    (state: ManageState, { tensileTests }) => {
      return {
        ...state,
        tensileTests,
      };
    }
  ),
  on(ManageActions.addCompressionTestButtonClicked, (state: ManageState) => {
    return {
      ...state,
      isCompressionTestAdding: true,
    };
  }),
  on(ManageActions.addCompressionTestSuccess, (state: ManageState) => {
    return {
      ...state,
      isCompressionTestAdding: false,
    };
  }),
  on(
    ManageActions.compressionTestsReceived,
    (state: ManageState, { compressionTests }) => {
      return {
        ...state,
        compressionTests,
      };
    }
  ),
  on(ManageActions.addTensileTestResultButtonClicked, (state: ManageState) => {
    return {
      ...state,
      isTensileResultAdding: true,
    };
  }),
  on(ManageActions.addTensileTestResultSuccess, (state: ManageState) => {
    return {
      ...state,
      isTensileResultAdding: false,
    };
  }),
  on(ManageActions.addCompressionTestResultButtonClicked, (state: ManageState) => {
    return {
      ...state,
      isCompressionResultAdding: true,
    };
  }),
  on(ManageActions.addCompressionTestResultSuccess, (state: ManageState) => {
    return {
      ...state,
      isCompressionResultAdding: false,
    };
  }),
  on(ManageActions.addAdditionalFileButtonClicked, (state: ManageState) => {
    return {
      ...state,
      isAdditionalFileAdding: true,
    };
  }),
  on(ManageActions.addAdditionalFileSuccess, (state: ManageState) => {
    return {
      ...state,
      isAdditionalFileAdding: false,
    };
  }),
  on(
    ManageActions.additionalFilesReceived,
    (state: ManageState, { additionalFiles }) => {
      return {
        ...state,
        additionalFiles,
      };
    }
  ),
  on(ManageActions.addTextureButtonClicked, (state: ManageState) => {
    return {
      ...state,
      isTextureAdding: true,
    };
  }),
  on(ManageActions.addTextureSuccess, (state: ManageState) => {
    return {
      ...state,
      isTextureAdding: false,
    };
  }),
  on(ManageActions.downloadFileButtonClicked, (state: ManageState) => {
    return {
      ...state,
      isFileDownloading: true,
    };
  }),
  on(
    ManageActions.fileReceivedFromBackend,
    (state: ManageState, { file }) => {
      return {
        ...state,
        file,
      };
    }
  ),
);

export function manageReducer(
  state: ManageState | undefined,
  action: Action
): ManageState {
  return reducer(state, action);
}
