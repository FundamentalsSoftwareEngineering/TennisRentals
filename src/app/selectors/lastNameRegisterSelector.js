import { createSelector } from 'reselect';
import get from 'lodash/get';

export const getLastNameRegister = state =>
get(state, 'registerPage.lastName', []);

export const lastNameRegisterSelector = createSelector(
    getLastNameRegister,
   lastName => lastName,
)