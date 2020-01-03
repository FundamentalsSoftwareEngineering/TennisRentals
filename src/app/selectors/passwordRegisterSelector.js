import { createSelector } from 'reselect';
import get from 'lodash/get';

export const getPasswordRegister = state =>
get(state, 'registerPage.password', []);

export const passwordRegisterSelector = createSelector(
    getPasswordRegister,
    password => password,
)