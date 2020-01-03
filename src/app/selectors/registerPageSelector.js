import { createSelector } from 'reselect';
import get from 'lodash/get';

export const getRegisterPage = state =>
get(state, 'registerPage', []);

export const registerPageSelector = createSelector(
    getRegisterPage,
    registerPage => registerPage,
)