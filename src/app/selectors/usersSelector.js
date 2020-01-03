import { createSelector } from 'reselect';
import get from 'lodash/get';

export const getAllUsers = state =>
get(state, 'users', []);

export const usersSelector = createSelector(
   getAllUsers,
   user => user,
)