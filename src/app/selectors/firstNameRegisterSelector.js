import { createSelector } from 'reselect';
import get from 'lodash/get';

export const getFirstNameRegister = state =>
get(state, 'registerPage.firstName', []);

export const firstNameRegisterSelector = createSelector(
    getFirstNameRegister,
   firstName => firstName,
)