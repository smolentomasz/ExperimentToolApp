import { Action, createReducer, on} from '@ngrx/store';
import { HeaderActions } from './header.actions';
import { User } from './header.model';

export const headerFeatureKey = 'header';

export interface HeaderState {
  isLoginLoading: boolean;
  user: User;
}

export const headerSelectors = {
    isLoginLoading: (state: HeaderState) => state.isLoginLoading,
    user: (state: HeaderState) => state.user
};

export const initialState: HeaderState = {
  isLoginLoading: false,
  user: undefined
};
const reducer = createReducer(
  initialState,
  on(HeaderActions.loginButtonClicked, (state: HeaderState) => {
    return {
      ...state,
      isLoginLoading: true,
    };
  }),
  on(HeaderActions.userReceivedFromBackend, (state: HeaderState, {user}) => {
    return {
      ...state,
      isLoginLoading: false,
      user
    };
  }),
  on(HeaderActions.userReceivedFromLocalStorage, (state: HeaderState, {user}) => {
    return {
      ...state,
      isLoginLoading: false,
      user
    };
  })
);

export function headerReducer(
  state: HeaderState | undefined,
  action: Action
): HeaderState {
  return reducer(state, action);
}
