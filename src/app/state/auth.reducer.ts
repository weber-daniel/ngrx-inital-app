import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import {User} from '../shared/user.model';

export interface State {
  isLoggedIn: boolean;
  loggedUser: User;
}

export const initialState: State = {
  isLoggedIn: false,
  loggedUser: undefined
};

const authReducer = createReducer(
  initialState,

  on(AuthActions.login, (state, action) => {
    return {
      ...state,
      isLoggedIn: true,
      loggedUser: action.user
    };
  }),

  on(AuthActions.logout, (state) => {
    return {
      ...state,
      isLoggedIn: false,
      loggedUser: undefined
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
