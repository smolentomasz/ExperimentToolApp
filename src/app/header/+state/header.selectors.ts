import { createFeatureSelector, createSelector } from '@ngrx/store';
import { headerFeatureKey, HeaderState } from './header.reducer';

const selectHeader = createFeatureSelector<HeaderState>(headerFeatureKey);

const selectHeaderState = createSelector(
  selectHeader,
  (state: HeaderState) => state
);

const selectIsLoginLoading = createSelector(
  selectHeaderState,
  (state: HeaderState) => state.isLoginLoading
);
const selectUser = createSelector(
  selectHeaderState,
  (state: HeaderState) => state.user
);

export const HeaderSelectors = {
  selectIsLoginLoading,
  selectUser,
};
