import { Action, createReducer, on, State } from '@ngrx/store';
import { ManageActions } from './manage.actions';

export const manageFeatureKey = 'manage';

export interface ManageState {
    isMaterialAdding: boolean;
  }

export const initialState: ManageState = {
    isMaterialAdding: false
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
      isMaterialAdding: false
    };
  }),
);

export function manageReducer(
  state: ManageState | undefined,
  action: Action
): ManageState {
  return reducer(state, action);
}
