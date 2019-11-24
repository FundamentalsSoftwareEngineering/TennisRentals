import React, { useReducer } from 'react';
import axios from 'axios';
import AppReducer from './reducer';
import { SET_ACTIVE_USER, GET_ACTIVE_USER } from '../action-types';
import AppContext from './context';

const AppState = props => {
    const initialState = {
        activeUser: {
            firstName: '',
            lastName: ''
        }
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const setActiveUser = async (user) => {

        try {
            const result = await axios.post(`http://localhost:3366/activeUser`, user);
            state.activeUser = user;
            dispatch({
                type: SET_ACTIVE_USER,
                payload: result.data
            })
        } catch(error) {
            // dispatch({ type: 'NEW_PROJECT_ERROR'});
            console.log('SET_ACTIVE_USER: ', error)
        } 


    };
    console.log(state.activeUser)
    const getActiveUser = async () => {
 
        try {
        const result = await axios.get(`http://localhost:3366/activeUser`);
 
        dispatch({
            type: GET_ACTIVE_USER,
            payload: result.data
        })
        }
        catch(error) {
            // dispatch({ type: 'NEW_PROJECT_ERROR'});
            console.log('GET_ACTIVE_USER: ', error)
        }

    };

    return (
        <AppContext.Provider
            value={{
                setActiveUser,
                getActiveUser
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;
