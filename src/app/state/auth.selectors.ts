import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State as AuthState} from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getIsLoggedIn = createSelector(
  getAuthState,
  state => state.isLoggedIn
);

export const getLoggedUser = createSelector(
  getAuthState,
  state => state.loggedUser
);
