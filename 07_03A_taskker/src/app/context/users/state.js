import React, { useReducer } from 'react';
import axios from 'axios';
import UserReducer from './reducer';
import { SET_LOADING, NEW_USER, GET_USERS } from '../action-types';
import UserContext from './context';

const UserState = props => {
    const initialState = {
        users: [],
        loading: false,
        activeUser: {
            firstName: '',
            lastName: ''
        }
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async () => {
        setLoading();

        const result = await axios.get(`http://localhost:3366/users`);
        // setProjects(result.data)   
        dispatch({
            type: GET_USERS,
            payload: result.data
        })

    };
    // add user
    const newUser = async (user) => {
        setLoading();

        try {
            const result = await axios.post(`http://localhost:3366/users`, user);
            dispatch({
                type: NEW_USER,
                payload: result.data
            })
        } catch(error) {
            // dispatch({ type: 'NEW_PROJECT_ERROR'});
            console.log('NEW_USER_ERROR: ', error)
        }

        // setProjects(result.data)  


    };

    // set loading
    const setLoading = () => dispatch({ type: SET_LOADING});

    return (
        <UserContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                newUser,
                getUsers,
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;
