import { SET_USERS, FETCH_USERS, CREATE_NEW_USER } from "../context/action-types";

const initialState = [
        {
            user_id: 1,
            firstName: 'Cristina',
            lastName: 'Sirb',
            email: 'gabrielala.cristina@gmail.com',
            password: '1234',
            points: 0,
            rental_id: 100
        },
        {
            user_id: 2,
            firstName: 'Marius',
            lastName: 'Mirica',
            email: 'miricamarius13@gmail.com',
            password: '1234',
            points: 0,
            rental_id: 101
        }
    ]


export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_USERS:
        return {
            ...state,
            users: action.payload,
        }
        case FETCH_USERS:
            return {
                ...state,
                users: [],
            }
        case CREATE_NEW_USER:
            return (
                 [...state, action.payload]
            )
    default: return state
}
}
