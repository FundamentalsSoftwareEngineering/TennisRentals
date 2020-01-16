import { reservationConstants } from '../_constants';



const reserveAction = (user, selectedCourt, day, month, year, startTime, endTime) => ({
    type: reservationConstants.CREATE_RESERVATION,
    payload: {user, selectedCourt, day, month, year, startTime, endTime},
});

const deleteReservationAction = (i) => ({
    type: reservationConstants.DELETE_RESERVATION,
    payload: i,
});

export const tennisCourtsActions = {
    reserveAction,
    deleteReservationAction
};

