import { SET_FIRST_NAME,
     SET_LAST_NAME,
     SET_EMAIL, 
     SET_PASSWORD,
     SET_REENTER_PASSWORD } from "../context/action-types";

const initialState = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            reenterPassword: '',
}


export const registerReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_FIRST_NAME:
        return {
            ...state,
            firstName: action.payload
            }
        
    case SET_LAST_NAME:
        return {
            ...state,
            lastName: action.payload,
        }
    case SET_EMAIL:
        return {
            ...state,
            email: action.payload,
        }
    case SET_PASSWORD:
        return {
            ...state,
            password: action.payload,
        }
    case SET_REENTER_PASSWORD:
        return {
            ...state,
            reenterPassword: action.payload,
        }
        case SET_REENTER_PASSWORD:
            return {
                ...state,
                reenterPassword: action.payload,
            }
    default: return state
}
}
