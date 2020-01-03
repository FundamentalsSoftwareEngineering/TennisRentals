import { createSelector } from 'reselect';
import get from 'lodash/get';

export const getEmailRegister = state =>
get(state, 'registerPage.email', []);

export const emailRegisterSelector = createSelector(
    getEmailRegister,
    email => email,
)