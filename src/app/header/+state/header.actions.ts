import { createAction, props } from '@ngrx/store';
import { User, UserLogin } from './header.model';

const headerInit = createAction(
  '[Header] Get token on start'
);
const loginButtonClicked = createAction(
  '[Header] Login button clicked',
  props<{ user: UserLogin }>()
);
const userReceivedFromBackend = createAction(
  '[Header] User received from backend',
  props<{ user: User }>()
);
const userReceivedFromLocalStorage = createAction(
  '[Header] User received from localstorage',
  props<{ user: User }>()
);
export const HeaderActions = {
  headerInit,
  loginButtonClicked,
  userReceivedFromBackend,
  userReceivedFromLocalStorage
};
