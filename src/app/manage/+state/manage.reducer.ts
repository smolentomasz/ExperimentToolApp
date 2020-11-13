import { state } from '@angular/animations';
import { Action, createReducer, on, State } from '@ngrx/store';
import { ManageActions } from './manage.actions';
import { Material } from './manage.model';

export const manageFeatureKey = 'manage';

export interface ManageState {
  isMaterialAdding: boolean;
  isTensileTestAdding: boolean;
  isCompressionTestAdding: boolean;
  materials: Material[];
  tensileTests: any[];
  compressionTests: any[];
}

export const initialState: ManageState = {
  isMaterialAdding: false,
  isTensileTestAdding: false,
  isCompressionTestAdding: false,
  materials: [],
  tensileTests: [],
  compressionTests: []
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
  on(ManageActions.tensileTestsReceived, (state: ManageState, { tensileTests }) => {
    return {
      ...state,
      tensileTests,
    };
  }),
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
  on(ManageActions.compressionTestsReceived, (state: ManageState, { compressionTests }) => {
    return {
      ...state,
      compressionTests,
    };
  })
);

export function manageReducer(
  state: ManageState | undefined,
  action: Action
): ManageState {
  return reducer(state, action);
}
