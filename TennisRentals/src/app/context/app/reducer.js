import { SET_ACTIVE_USER } from '../action-types';

export default (state, action) => {
    switch(action.type) {
        case SET_ACTIVE_USER:
            return {
                ...state,
                activeUser: action.payload,
            }
        default:
            return state
    }
}
