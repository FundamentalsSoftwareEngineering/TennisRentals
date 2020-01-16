import { reservationConstants } from '../_constants';

const initialState =  [];

export function reservations(state = initialState, action) {
    switch (action.type) {
        case reservationConstants.CREATE_RESERVATION:
            return [...state, action.payload];
        case reservationConstants.DELETE_RESERVATION:
            return state.filter((data, i) => {
                    return i !== action.payload});

        default:
            return state
    }
}