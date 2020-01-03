import { connect } from 'react-redux'
import { usersSelector } from '../selectors/usersSelector';
import { firstNameRegisterSelector } from '../selectors/firstNameRegisterSelector';
import { lastNameRegisterSelector } from '../selectors/lastNameRegisterSelector';
import { emailRegisterSelector } from '../selectors/emailRegisterSelector';
import { passwordRegisterSelector } from '../selectors/passwordRegisterSelector';
import { reenterPasswordRegisterSelector } from '../selectors/reenterPasswordRegisterSelector';
import { registerNewUserAction } from '../actions/registerNewUserAction';
import { navigateToHomeAction } from '../actions/navigateToHomeAction';
import { push } from 'react-router-redux'

import Register from '../pages/Register';
import { SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_EMAIL,
    SET_PASSWORD,
    SET_REENTER_PASSWORD,
    CREATE_NEW_USER } from '../context/action-types';

export const mapStateToProps = state => ({
    users: usersSelector(state),
    firstName: firstNameRegisterSelector(state),
    lastName: lastNameRegisterSelector(state),
    email: emailRegisterSelector(state),
    password: passwordRegisterSelector(state),
    reenterPassword: reenterPasswordRegisterSelector(state),

});

export const mapDispatchToProps = dispatch => ({
    onChangeFirstName: (e) => {
        dispatch({
            type: SET_FIRST_NAME,
            payload: e.target.value
        })
    },
    onChangeLastName: (e) => {
        dispatch({
            type: SET_LAST_NAME,
            payload: e.target.value
        })
    },
    onChangeEmail: (e) => {
        dispatch({
            type: SET_EMAIL,
            payload: e.target.value
        })
    },
    onChangePassword: (e) => {
        dispatch({
            type: SET_PASSWORD,
            payload: e.target.value
        })
    },
    onChangeReenterPassword: (e) => {
        dispatch({
            type: SET_REENTER_PASSWORD,
            payload: e.target.value
        })
    },
    onRegister: (e) => {
        e.preventDefault();
        dispatch(registerNewUserAction());
        push('/');
    }
});

export const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);