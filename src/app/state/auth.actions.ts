import { createAction, props } from '@ngrx/store';
import {User} from '../shared/user.model';

export const login = createAction(
  '[Auth Login] Load Login',
  props<{ user: User }>()
);

export const logout = createAction(
  '[Auth Logout] Load Logout'
);




