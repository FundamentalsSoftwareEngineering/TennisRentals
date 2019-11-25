import { SET_LOADING, NEW_USER, GET_USERS, SET_ACTIVE_USER } from '../action-types';

export default (state, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case NEW_USER:
            return {
                ...state,
                users: [ ...state.users, action.payload ],
                loading: true
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_ACTIVE_USER:
            return {
                ...state,
                activeUser: action.payload,
            }
        default:
            return state
    }
}
