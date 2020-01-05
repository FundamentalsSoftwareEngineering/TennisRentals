import { firstNameRegisterSelector } from '../selectors/firstNameRegisterSelector';
import { lastNameRegisterSelector } from '../selectors/lastNameRegisterSelector';
import { emailRegisterSelector } from '../selectors/emailRegisterSelector';
import { passwordRegisterSelector } from '../selectors/passwordRegisterSelector';
import { createNewUserAction } from './createNewUserAction';

export const registerNewUserAction = () => (dispatch, getState) => {

    const firstName = firstNameRegisterSelector(getState());
    const lastName = lastNameRegisterSelector(getState());
    const email = emailRegisterSelector(getState());
    const password = passwordRegisterSelector(getState());
    const newUser = {
        firstName,
        lastName,
        email,
        password
    };
    dispatch(createNewUserAction(newUser));
};
