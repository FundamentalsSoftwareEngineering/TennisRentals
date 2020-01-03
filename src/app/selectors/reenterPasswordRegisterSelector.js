import { createSelector } from 'reselect';
import get from 'lodash/get';

export const getReenterPasswordRegister = state =>
get(state, 'registerPage.reenterPassword', []);

export const reenterPasswordRegisterSelector = createSelector(
    getReenterPasswordRegister,
    reenterPassword => reenterPassword,
)